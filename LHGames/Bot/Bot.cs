using System;
using System.Collections.Generic;
using LHGames.Helper;
using Microsoft.AspNetCore.Server.Kestrel.Internal.System.Collections.Sequences;

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

        /// <summary>
        /// Implement your bot here.
        /// </summary>
        /// <param name="map">The gamemap.</param>
        /// <param name="visiblePlayers">Players that are visible to your bot.</param>
        /// <returns>The action you wish to execute.</returns>
        internal string ExecuteTurn(Map map, IEnumerable<IPlayer> visiblePlayers)
        {
            // TODO: Implement your AI here.
            if (map.GetTileAt(PlayerInfo.Position.X + _currentDirection, PlayerInfo.Position.Y) == TileContent.Wall)
            {
                _currentDirection *= -1;
            }

            var data = StorageHelper.Read<TestClass>("Test");
            Console.WriteLine(data?.Test);
            return AIHelper.CreateMoveAction(new Point(_currentDirection, 0));
        }

        /// <summary>
        /// Gets called after ExecuteTurn.
        /// </summary>
        internal void AfterTurn()
        {


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
                    posX--;
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