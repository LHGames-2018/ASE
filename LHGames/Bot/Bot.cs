using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using LHGames.Helper;
using Microsoft.AspNetCore.Server.Kestrel.Internal.System.Collections.Sequences;
using System.Linq;


namespace LHGames.Bot
{
    internal class Bot
    {
        internal IPlayer PlayerInfo { get; set; }
        private int _currentDirection = 1;
        internal Bot() { }

        const int PORTEE_MAXIMALE = 28900;
        const int PORTEE_ENNEMI = 20;
        List<TileContent> listTitlePriority = new List<TileContent>() { TileContent.Resource };
        List<Tile> ressourceTiles;
        List<Tile> playerTiles;

        /// <summary>
        /// Gets called before ExecuteTurn. This is where you get your bot's state.
        /// </summary>
        /// <param name="playerInfo">Your bot's current state.</param>
        internal void BeforeTurn(IPlayer playerInfo)
        {
            PlayerInfo = playerInfo;
        }

        internal void fight(Tile obstacleTile) {

        }

        /// <summary>
        /// Implement your bot here.
        /// </summary>
        /// <param name="map">The gamemap.</param>
        /// <param name="visiblePlayers">Players that are visible to your bot.</param>
        /// <returns>The action you wish to execute.</returns>
        static int vertical = 0;
        static int horizontal = 0;
        static Random generateurAleatoire = new Random();
        public delegate int DistanceFromTiles(Point positionRessource, Point positionJoueur);

        public int TrouverDistanceEntreDeuxPoints(Point positionRessource, Point positionJoueur)
        {
            int dx = Math.Abs(positionRessource.X - positionJoueur.X);
            int dy = Math.Abs(positionRessource.Y - positionJoueur.Y);
            return (int)(Math.Pow(dx, 2) + Math.Pow(dy, 2));
        }
        internal string ExecuteTurn(Map map, IEnumerable<IPlayer> visiblePlayers)
        {
            // TODO: Implement your AI here.
            string instruction = "";
            map.VisibleDistance = 20;
            List<Tile> visibleTiles = map.GetVisibleTiles().ToList();

            List<Tile> ressourceTiles = visibleTiles.Where(t => t.TileType == TileContent.Resource).ToList();
            List<Tile> playerTiles = visibleTiles.Where(t => t.TileType == TileContent.Player).ToList();

            Point destination = PlayerInfo.HouseLocation;
            if (ressourceTiles.Count != 0)
            {
                DistanceFromTiles dist = new DistanceFromTiles(TrouverDistanceEntreDeuxPoints);
                ressourceTiles = ressourceTiles.OrderBy(t => dist(t.Position, PlayerInfo.Position)).ToList();
                destination = ressourceTiles[0].Position;
            }

            Tile closestResource = ressourceTiles[0];
            Tuple<Point, TileContent> nextMove = null;
            switch(listTitlePriority[0])
            {
                case TileContent.House:
                    nextMove = checkNextTile(map, closestResource.Position);
                    break;
                case TileContent.Lava:
                    break;
                case TileContent.Player:
                    nextMove = checkNextTile(map,playerTiles[0].Position);
                    break;
                case TileContent.Resource:
                    nextMove = checkNextTile(map, closestResource.Position);
                    break;
                case TileContent.Shop:
                    break;
                case TileContent.Wall:
                    break;
                
            }

            
            
            switch (nextMove.Item2)
            {
                case TileContent.Empty:
                    instruction = AIHelper.CreateMoveAction(nextMove.Item1 - this.PlayerInfo.Position);
                    break;
                case TileContent.House:
                    nextMove = checkNextTile(map, closestResource.Position);
                    break;
                case TileContent.Lava:
                    break;
               
                case TileContent.Resource:
                    instruction = AIHelper.CreateCollectAction(nextMove.Item1 - this.PlayerInfo.Position);
                    break;
                case TileContent.Shop:
                    break;
                case TileContent.Player:
                case TileContent.Wall:
                    instruction = AIHelper.CreateMeleeAttackAction(nextMove.Item1 - this.PlayerInfo.Position);
                    break;

            }



            var data = StorageHelper.Read<TestClass>("Test");
            Console.WriteLine(data?.Test);
            return instruction;//AIHelper.CreateCollectAction(new Point(1, 0));
            //return AIHelper.CreateMoveAction(new Point(-1, 0));
        }

        /// <summary>
        /// Gets called after ExecuteTurn.
        /// </summary>
        internal void AfterTurn()
        {
            int distanceDeLaMaisonCarre = TrouverDistanceEntreDeuxPoints(PlayerInfo.HouseLocation, PlayerInfo.Position);
            float facteurEloignement = ((float)PlayerInfo.CarriedResources / PlayerInfo.CarryingCapacity);

            int distanceEnnemy = 100;
            if(playerTiles.Count > 0)
            {
                distanceEnnemy = TrouverDistanceEntreDeuxPoints(playerTiles[0].Position, PlayerInfo.Position);
            }
             
            if (listTitlePriority.Count == 0)
            {
                listTitlePriority.Insert(0,TileContent.Resource);
            }

            if(distanceEnnemy <= PORTEE_ENNEMI)
            {
                if(listTitlePriority[0] != TileContent.Player)
                {
                    listTitlePriority.Insert(0,TileContent.Player);
                }

            }else if (this.PlayerInfo.CarriedResources >= this.PlayerInfo.CarryingCapacity - 100
                || distanceDeLaMaisonCarre * facteurEloignement >= PORTEE_MAXIMALE)
            {
                
                if (listTitlePriority[0] != TileContent.House)
                {
                    listTitlePriority.Insert(0,TileContent.House);
                }
               
            }
            
            else
            {
              
                if( listTitlePriority[0] != TileContent.Resource)
                {
                    listTitlePriority.Insert(0,TileContent.Resource);
                }
            }


            while(listTitlePriority.Count > 15)
            {
                listTitlePriority.RemoveAt(listTitlePriority.Count-1);
            }
        }


        private Tuple<Point,TileContent> checkNextTile(Map map, Point ressourceCible)
        {
            int posX = this.PlayerInfo.Position.X;
            int posY = this.PlayerInfo.Position.Y;

            if (Math.Abs(ressourceCible.X - this.PlayerInfo.Position.X) != 0)
            {
                if(ressourceCible.X - this.PlayerInfo.Position.X < 0)
                {
                    posX--;
                }
                else
                {
                    posX++;
                }

            }
            else if(Math.Abs(ressourceCible.Y - this.PlayerInfo.Position.Y) != 0)
            {
                if (ressourceCible.Y - this.PlayerInfo.Position.Y < 0)
                {
                    posY--;
                }
                else
                {
                    posY++;
                }
            }
            Tuple<Point, TileContent> tuple = new Tuple<Point, TileContent>(new Point(posX,posY), map.GetTileAt(posX, posY));

            return tuple;
        }
    }
}

class TestClass
{
    public string Test { get; set; }
}