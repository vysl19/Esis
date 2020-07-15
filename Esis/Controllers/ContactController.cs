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
    public class ContactController : ApiController
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        // GET: api/About
        [HttpGet]
        public List<Contact> List()
        {
            try
            {
                var contactRepository = new ContactRepository();
                return contactRepository.List();
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
            return new List<Contact>();
        }


        // POST: api/About
        [HttpPost]
        public void Post([FromBody] Contact contact)
        {
            try
            {
                var contactRepository = new ContactRepository ();
                contactRepository.Update(contact);
            }
            catch (Exception e)
            {
                logger.Error(string.Format("Hata=>{0} StackTrace=>{1}", e.Message, e.StackTrace));
            }
        }
    }
}
