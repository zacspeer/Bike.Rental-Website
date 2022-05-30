using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace WebApplication1
{
    public class ChatHub : Hub
    {
        public void Announce(string message)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.Announce(message);
        }
    }
}