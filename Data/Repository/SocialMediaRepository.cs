using Data.Enity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository
{
   public class SocialMediaRepository:BaseRepository
    {
        public List<SocialMedia> List()
        {
            var result = new List<SocialMedia>();
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.SOCIAL_MEDIA_SELECT";
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                var entity = new SocialMedia
                                {
                                    Twitter = reader["TWITTER"].ToString(),
                                    Instagram = reader["INSTAGRAM"].ToString(),
                                    Linkedin = reader["LINKEDIN"].ToString(),
                                    Facebook = reader["FACEBOOK"].ToString(),
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

        public void Update(SocialMedia socialMedia)
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = "dbo.SOCIAL_MEDIA_UPDATE";
                        cmd.Parameters.AddWithValue("@FACEBOOK", socialMedia.Facebook);
                        cmd.Parameters.AddWithValue("@TWITTER", socialMedia.Twitter);
                        cmd.Parameters.AddWithValue("@INSTAGRAM", socialMedia.Instagram);
                        cmd.Parameters.AddWithValue("@LINKEDIN", socialMedia.Linkedin);

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
