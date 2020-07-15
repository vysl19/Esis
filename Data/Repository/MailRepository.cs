using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class MailRepository:BaseRepository
    {
        public List<Mail> List()
        {
            var result = new List<Mail>();
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.MAIL_SELECT";
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new Mail
                                {                                    
                                    Email= reader["MAIL"].ToString(),
                                    Host= reader["HOST"].ToString(),
                                    Password= reader["PASSWORD"].ToString(),
                                    Port = int.Parse(reader["PORT"].ToString())
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

        public void Update(Mail mail)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.MAIL_UPDATE";
                        cmd.Parameters.AddWithValue("@HOST", mail.Host);
                        cmd.Parameters.AddWithValue("@MAIL", mail.Email);
                        cmd.Parameters.AddWithValue("@PASSWORD", mail.Password);
                        cmd.Parameters.AddWithValue("@PORT", mail.Port);
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
