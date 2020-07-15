using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class AboutRepository : BaseRepository
    {
        public List<About> List()
        {
            var result = new List<About>();
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.ABOUT_SELECT";
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new About
                                {
                                    Id = int.Parse(reader["ID"].ToString()),
                                    Html = reader["HTML"].ToString(),
                                    Language = reader["LANGUAGE"].ToString(),
                                    Title = reader["TITLE"].ToString(),
                                    Image = reader["IMAGE"].ToString()
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

        public void Upsert(About about)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.ABOUT_UPDATE";                        
                        cmd.Parameters.AddWithValue("@HTML", about.Html);                        
                        cmd.Parameters.AddWithValue("@IMAGE", about.Image);
                        cmd.Parameters.AddWithValue("@LANGUAGE", about.Language);
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
