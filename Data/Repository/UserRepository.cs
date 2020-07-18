using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class UserRepository :BaseRepository
    {
        public bool Login(User user)
        {            
            using (conn)
            {
                using (cmd)
                {
                    conn.Open();
                    cmd.CommandText = "dbo.USERS_SELECT";
                    cmd.Parameters.AddWithValue("@NAME", user.UserName);
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
