using System.Data.SqlClient;

namespace Business.Cache
{
    public class StringCache : DbCachedDictionary<string, string>
    {
        private static readonly object padlock = new object();
        private static StringCache instance = null;

        public static StringCache GetInstance()
        {
            lock (padlock)
            {
                if (instance == null)
                {
                    instance = new StringCache();
                }
                return instance;
            }
        }
        private StringCache() : base("dbo.STRING_SELECT")
        {

        }
        public override void Populate(SqlDataReader reader)
        {
            var stringCode = reader["TITLE"].ToString();
            var stringValue = reader["TEXT"].ToString();
            var languageCode = reader["LANGUAGE"].ToString();
            if (!dict.ContainsKey(stringCode + "-" + languageCode))
            {
                dict.Add(stringCode + "-" + languageCode, stringValue);
            }
        }
        public string GetStringByLanguage(string key, string language)
        {
            var text = GetValue(key + "-" + language);
            if (text == null)
            {
                text = key;
            }
            return text;
        }
    }
}
