using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
    public class MetaRepository : BaseRepository
    {
        public List<Meta> List()
        {
            var result = new List<Meta>();
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.META_SELECT";
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new Meta
                                {
                                    Title = reader["TITLE"].ToString(),
                                    Author = reader["AUTHOR"].ToString(),
                                    Description = reader["DESCRIPTION"].ToString(),
                                    Keywords = reader["KEYWORDS"].ToString(),
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

        public void Update(Meta meta)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.META_UPDATE";                        
                        cmd.Parameters.AddWithValue("@AUTHOR", meta.Author);
                        cmd.Parameters.AddWithValue("@TITLE", meta.Title);
                        cmd.Parameters.AddWithValue("@DESCRIPTION", meta.Description);
                        cmd.Parameters.AddWithValue("@KEYWORDS", meta.Keywords);                        

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
