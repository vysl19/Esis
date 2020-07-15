using Data.Enity;
using Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Service
{
    public interface IUserService
    {
        bool Login(IUser user);
    }
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public bool Login(IUser user)
        {
            return _userRepository.Login(user);
        }
    }
}
