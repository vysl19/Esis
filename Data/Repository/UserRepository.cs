using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public interface IUserRepository
    {
        bool Login(IUser user);
    }
    public class UserRepository :BaseRepository, IUserRepository
    {
        public bool Login(IUser user)
        {            
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.USER_SELECT";
                    cmd.Parameters.AddWithValue("@USER_NAME", user.UserName);
                    cmd.Parameters.AddWithValue("@PASSWORD", user.Password);
                }
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            return true;
                        }
                    }
                }
            }

            return false;
        }
    }
}
