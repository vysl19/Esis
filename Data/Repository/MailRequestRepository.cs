using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class MailRequestRepository : BaseRepository
    {
        public List<Notification> List(string ip)
        {
            var result = new List<Notification>();
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.MAIL_REQUEST_SELECT";
                        cmd.Parameters.AddWithValue("@IP", ip);
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new Notification
                                {
                                    Email = reader["SENDER_MAIL"].ToString(),
                                    Message = reader["MESSAGE"].ToString(),
                                    Ip = reader["IP"].ToString(),                                    
                                };
                                result.Add(entity);
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                conn.Close();
                throw e;
            }


            return result;
        }

        public void Insert(Notification notification)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.MAIL_REQUEST_INSERT";                        
                        cmd.Parameters.AddWithValue("@SENDER_MAIL", notification.Email);
                        cmd.Parameters.AddWithValue("@MESSAGE", notification.Message);
                        cmd.Parameters.AddWithValue("@IP", notification.Ip);                       

                        cmd.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception e)
            {
                conn.Close();
                throw e;
            }
        }
    }
}
