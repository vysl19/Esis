using Data.Repository;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Business.Cache
{
    public abstract class DbCachedDictionary<TKey, TValue> : BaseRepository
    {
        protected string spName;
        protected static Dictionary<TKey, TValue> dict;

        public DbCachedDictionary(string spName)
        {
            this.spName = spName;

            dict = new Dictionary<TKey, TValue>();
            Load();
        }
        public virtual void Load()
        {
            try
            {
                using (conn)
                {
                    using (cmd)
                    {
                        conn.Open();
                        cmd.CommandText = spName;
                    }
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                Populate(reader);
                            }
                        }
                    }
                }
            }
            catch(Exception e)
            {
                conn.Close();
                throw e;
            }
            

        }
        public  Dictionary<TKey, TValue> GeValues()
        {
            return dict;
        }
        public  TValue GetValue(TKey key)
        {
            return dict.TryGetValue(key, out TValue value) ? (default) : value;
        }
        public void Reload()
        {
            SetConnection();
            dict.Clear();
            Load();
        }

        public abstract void Populate(SqlDataReader reader);
    }
}
