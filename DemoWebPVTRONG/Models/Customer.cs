using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoWebPVTRONG.Models
{
    public class Customer
    {

        /// <summary>
        /// ID khách hàng
        /// </summary>
        public Guid CustomerID { get; set; }
        /// <summary>
        /// Mã khách hàng
        /// </summary>
        public string CustomerCode { get; set; }
        /// <summary>
        /// Tên khách hàng
        /// </summary>
        public string CustomerName { get; set; }
        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string Mobile { get; set; }
        /// <summary>
        /// Email
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Thành phố
        /// </summary>
        public string City { get; set; }
        /// <summary>
        /// Quận/huyện
        /// </summary>
        public string District { get; set; }
        /// <summary>
        /// Xã/phường
        /// </summary>
        public string Commune { get; set; }
        /// <summary>
        /// Đường phố, số nhà
        /// </summary>
        public string Street { get; set; }
        /// <summary>
        /// Ngày sinh
        /// </summary>
        public DateTime Birthday { get; set; }
        /// <summary>
        /// GroupCustomer
        /// </summary>
        public string GroupCustomer { get; set; }
        /// <summary>
        /// Mã thành viên
        /// </summary>
        public int MemberCode { get; set; }
        /// <summary>
        /// Hạng 
        /// </summary>
        public string Rank { get; set; }
        /// <summary>
        /// Ghi chú
        /// </summary>
        public string TextNote{ get; set; }
        /// <summary>
        /// Tình trạng
        /// </summary>
        public bool Status { get; set; }
        /// <summary>
        /// Số CMND/Hộ chiếu
        /// </summary>
        public string CMND { get; set; }
        /// <summary>
        /// Tên công ty
        /// </summary>
        public string Company { get; set; }
        /// <summary>
        ///  Mã số thuế
        /// </summary>
        public string Taxcode { get; set; }
        /// <summary>
        /// Ngày tạo bản ghi
        /// </summary>
        public DateTime CreatedDate { get; set; }
        /// <summary>
        /// Người tạo bản ghi
        /// </summary>

        public string CreatedBy { get; set; }
        /// <summary>
        /// Tình trạng
        /// </summary>
        public DateTime ModifiedDate { get; set; }
        /// <summary>
        /// Ngày thực hiện chỉnh sửa
        /// </summary>
    }
}