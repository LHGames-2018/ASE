using System;
using System.Collections.Generic;
using LHGames.Helper;

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
        static int vertical = 0;
        internal string ExecuteTurn(Map map, IEnumerable<IPlayer> visiblePlayers)
        {
            // TODO: Implement your AI here.
            string instruction = "";
            if (vertical != 4)
            {
                vertical++;
                instruction = AIHelper.CreateMoveAction(new Point(0, 1));
            }
            if (map.GetTileAt(PlayerInfo.Position.X + _currentDirection, PlayerInfo.Position.Y) == TileContent.Wall)
            {
                _currentDirection *= -1;
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