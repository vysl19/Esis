using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Enity
{

    public interface IUser
    {
        /// <summary>
        /// UserName
        /// </summary>
        string UserName { get; set; }

        /// <summary>
        /// Password
        /// </summary>
        string Password { get; set; }
    }
    public class User:IUser
    {
       public string UserName { get; set; }

        public string Password { get; set; }
    }
}
