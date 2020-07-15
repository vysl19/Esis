using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Enity
{
    public class Contact
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Address
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Location
        /// </summary>
        public string Location { get; set; }

        /// <summary>
        /// Mail
        /// </summary>
        public string Mail { get; set; }

        /// <summary>
        /// Fax
        /// </summary>
        public string Fax { get; set; }

        /// <summary>
        /// Telephone
        /// </summary>
        public string Telephone { get; set; }

        /// <summary>
        /// Title
        /// </summary>
        public string Title { get; set; }
    }

}

