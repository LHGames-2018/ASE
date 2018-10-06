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

        List<TileContent> listTitlePriority = new List<TileContent>();
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

            DistanceFromTiles dist = new DistanceFromTiles(TrouverDistanceEntreDeuxPoints);
            ressourceTiles = ressourceTiles.OrderBy(t => dist(t.Position, PlayerInfo.Position)).ToList();

            Tile closestResource = ressourceTiles[0];

            /*
            int smallestDelta = int.MaxValue;
            Tile nearTile = null;
            int dxFromNearTile = 0, dyFromNearTile = 0;
            foreach (Tile ressourceTile in ressourceTiles) {
                Point ressourcePosition = ressourceTile.Position;
                int dx = Math.Abs(ressourcePosition.X - playerPosition.X);
                int dy = Math.Abs(ressourcePosition.Y - playerPosition.Y);
                int delta = (int) (Math.Pow(dx, 2) + Math.Pow(dy, 2));
                if (delta < smallestDelta) {
                    smallestDelta = delta;
                    nearTile = ressourceTile;
                    dxFromNearTile = dx;
                    dyFromNearTile = dy;
                }

                if (dxFromNearTile > 1 || dyFromNearTile > 1) {
                    // move to the ressource
                    
                    // update deltas
                }

            }*/

  

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
            if(this.PlayerInfo.CarriedResources >= this.PlayerInfo.CarryingCapacity - 100)
            {
                if (listTitlePriority[0] == TileContent.Resource)
                {
                    listTitlePriority.RemoveAt(0);
                }
                if (listTitlePriority[0] != TileContent.House)
                {
                    listTitlePriority.Add(TileContent.House);
                }
               
            }
            else
            {
                if(listTitlePriority[0] == TileContent.House)
                {
                    listTitlePriority.RemoveAt(0);
                }
                if(listTitlePriority[0] != TileContent.Resource)
                {
                    listTitlePriority.Add(TileContent.Resource);
                }
            }
        }


        private Tuple<Point,TileContent> checkNextTile(Map map, Tile ressourceCible)
        {
            int posX = this.PlayerInfo.Position.X;
            int posY = this.PlayerInfo.Position.Y;

            if (Math.Abs(ressourceCible.Position.X - this.PlayerInfo.Position.X) != 0)
            {
                if(ressourceCible.Position.X - this.PlayerInfo.Position.X < 0)
                {
                    posX--;
                }
                else
                {
                    posX++;
                }

            }
            else if(Math.Abs(ressourceCible.Position.Y - this.PlayerInfo.Position.Y) != 0)
            {
                if (ressourceCible.Position.Y - this.PlayerInfo.Position.Y < 0)
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