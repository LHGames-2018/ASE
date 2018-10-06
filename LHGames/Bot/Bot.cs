using System;
using System.Collections;
using System.Collections.Generic;
using LHGames.Helper;
using System.Linq;

namespace LHGames.Bot
{
    internal class Bot
    {
        internal IPlayer PlayerInfo { get; set; }
        private int _currentDirection = 1;

        internal Bot() { }

        /// <summary>
        /// Gets called before ExecuteTurn. This is where you get your bot's state.
        /// </summary>
        /// <param name="playerInfo">Your bot's current state.</param>
        internal void BeforeTurn(IPlayer playerInfo)
        {
            PlayerInfo = playerInfo;
        }

        internal void fight(Tile obstacleTile) {
            Point obstaclePosition = obstacleTile.Position;
            while (obstacleTile.TileType != TileContent.Resource || 
                obstacleTile.TileType != TileContent.Empty) {
                AIHelper.CreateMeleeAttackAction(obstaclePosition);
            }
        }

        /// <summary>
        /// Implement your bot here.
        /// </summary>
        /// <param name="map">The gamemap.</param>
        /// <param name="visiblePlayers">Players that are visible to your bot.</param>
        /// <returns>The action you wish to execute.</returns>
        static int vertical = 0;
        static int horizontal = 0;
        internal string ExecuteTurn(Map map, IEnumerable<IPlayer> visiblePlayers)
        {
            // TODO: Implement your AI here.
            string instruction = "";
            map.VisibleDistance = 20;
            List<Tile> visibleTiles = map.GetVisibleTiles().ToList();

            List<Tile> ressourceTiles = visibleTiles.Where(t => t.TileType == TileContent.Resource).ToList();

            Point playerPosition = this.PlayerInfo.Position;
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
        }
    }
}

class TestClass
{
    public string Test { get; set; }
}