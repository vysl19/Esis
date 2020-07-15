using Business.Helper;
using Data.Enity;
using Data.Repository;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Esis.Controllers
{
    public class AboutController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/About
        [HttpGet]
        public List<About> List()
        {
            try
            {
                var aboutRepository = new AboutRepository();
                return aboutRepository.List();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new List<About>();
        }


        // POST: api/About
        [HttpPost]
        public void Post([FromBody] About about)
        {
            try
            {
                var aboutRepository = new AboutRepository();
                if (about.Image.IndexOf(Constants.Base64String) >= 0)
                {
                    byte[] content = Convert.FromBase64String(about.Image.Replace(Constants.Base64String, string.Empty));
                    var guid = Guid.NewGuid().ToString("N");
                    var path = "/Images/" + guid + ".jpeg";
                    if (System.Diagnostics.Debugger.IsAttached)
                    {
                        path = "~/Images/" + guid + ".jpeg"; ;
                    }

                    var fullPath = System.Web.HttpContext.Current.Server.MapPath(path);
                    System.IO.File.WriteAllBytes(fullPath, content);
                    about.Image = path.Replace("~", "");
                }
                aboutRepository.Upsert(about);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
        }
    }
}
