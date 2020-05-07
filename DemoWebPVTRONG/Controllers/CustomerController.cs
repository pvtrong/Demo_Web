using DemoWebPVTRONG.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;

namespace DemoWebPVTRONG.Controllers
{
    [RoutePrefix("customers")]
    public class CustomerController : ApiController
    {
        
        // GET: api/Customer
        [Route("")]
        public IEnumerable<Customer> Get()
        {
            var customers = new List<Customer>();

            string connectionString = "Server=.;Database=MISA.WDT02.PVTRONG;Trusted_Connection=True;";
            // Khởi tạo đối tượng Sql Connection:
            SqlConnection sqlConnection = new SqlConnection(connectionString);

            // Đối tượng SQL Command cho phép thao tacs với CSDL:
            SqlCommand sqlCommand = sqlConnection.CreateCommand();
            sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            // Khai báo câu truy vấn:
            sqlCommand.CommandText = "dbo.Pro_GETCustomers";

            // Mở kết nối tới Database:
            sqlConnection.Open();

            // Thực thi công việc với Database
            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();


            // Xử lý dữ liệu trả về:
            while (sqlDataReader.Read())
            {
                var customer = new Customer();
                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {

                    // Lấy tên cột dữ liệu đang đọc:
                    var colName = sqlDataReader.GetName(i);

                    //Lấy giá trị của Cell đang đọc:
                    var value = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(colName);
                    if(colName == "Status")
                    {
                        if (value.Equals(1))
                        {
                            value = true;
                        }
                        else value = false; 
                    }
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(customer, value);
                    }
                }
                // Thêm đối tượng khách hàng tương ứng vào LIST:
                customers.Add(customer);
            }
            sqlConnection.Close();
            return customers;
        }

        [Route("{CustomerID}")]
        public Customer Get(Guid CustomerID)
        {


            var customers = new List<Customer>();

            string connectionString = "Server=.;Database=MISA.WDT02.PVTRONG;Trusted_Connection=True;";
            // Khởi tạo đối tượng Sql Connection:
            SqlConnection sqlConnection = new SqlConnection(connectionString);

            // Đối tượng SQL Command cho phép thao tacs với CSDL:
            SqlCommand sqlCommand = sqlConnection.CreateCommand();
            sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            // Khai báo câu truy vấn:
            sqlCommand.CommandText = "dbo.Pro_GETCustomerByID";

            // Gán giá trị đầu vào cho các tham số trong store:
            sqlCommand.Parameters.AddWithValue("@CustomerID", CustomerID);
            // Mở kết nối tới Database:
            sqlConnection.Open();

            // Thực thi công việc với Database
            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();


            // Xử lý dữ liệu trả về:
            while (sqlDataReader.Read())
            {
                var customer = new Customer();
                for (int i = 0; i < sqlDataReader.FieldCount; i++)
                {

                    // Lấy tên cột dữ liệu đang đọc:
                    var colName = sqlDataReader.GetName(i);

                    //Lấy giá trị của Cell đang đọc:
                    var value = sqlDataReader.GetValue(i);
                    var property = customer.GetType().GetProperty(colName);
                    if (colName == "Status")
                    {
                        if (value.Equals(1))
                        {
                            value = true;
                        }
                        else value = false;
                    }
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(customer, value);
                    }
                }
                return customer;
                // Thêm đối tượng khách hàng tương ứng vào LIST:
            }
            sqlConnection.Close();
            return null;

        }

        // POST: api/Customer
        [Route("")]
        public int Post([FromBody]Customer customer)
        {
            var customers = new List<Customer>();
            string connectionString = "Server=.;Database=MISA.WDT02.PVTRONG;Trusted_Connection=True;";
            // Khởi tạo đối tượng Sql Connection:
            SqlConnection sqlConnection = new SqlConnection(connectionString);

            // Đối tượng SQL Command cho phép thao tacs với CSDL:
            SqlCommand sqlCommand = sqlConnection.CreateCommand();
            sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            // Khai báo câu truy vấn:
            sqlCommand.CommandText = "dbo.Pro_InsertCustomer";

            // Gán giá trị đầu vào cho các tham số trong store:
            sqlCommand.Parameters.AddWithValue("@CustomerID", Guid.NewGuid());
            sqlCommand.Parameters.AddWithValue("@CustomerCode", customer.CustomerCode);
            sqlCommand.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
            sqlCommand.Parameters.AddWithValue("@Mobile", customer.Mobile);
            sqlCommand.Parameters.AddWithValue("@GroupCustomer", customer.GroupCustomer);
            sqlCommand.Parameters.AddWithValue("@City", customer.City);
            sqlCommand.Parameters.AddWithValue("@District", customer.District);
            sqlCommand.Parameters.AddWithValue("@Commune", customer.Commune);
            sqlCommand.Parameters.AddWithValue("@Email", customer.Email);
            sqlCommand.Parameters.AddWithValue("@Birthday", customer.Birthday);
            sqlCommand.Parameters.AddWithValue("@TextNote", customer.TextNote);
            sqlCommand.Parameters.AddWithValue("@MemberCode", customer.MemberCode);
            sqlCommand.Parameters.AddWithValue("@Rank", customer.Rank);
            sqlCommand.Parameters.AddWithValue("@CMND", customer.CMND);
            sqlCommand.Parameters.AddWithValue("@Company", customer.Company);
            sqlCommand.Parameters.AddWithValue("@Taxcode", customer.MemberCode);
            sqlCommand.Parameters.AddWithValue("@CreatedDate", DateTime.Now);
            sqlCommand.Parameters.AddWithValue("@CreatedBy", "PVTRONG");
            sqlCommand.Parameters.AddWithValue("@ModifiedDate", DateTime.Now);
            sqlCommand.Parameters.AddWithValue("@Status", customer.Status);
            sqlCommand.Parameters.AddWithValue("@Street", customer.Street);

            // Mở kết nối tới Database:
            sqlConnection.Open();

            // Thực thi công việc với Database
            var result = sqlCommand.ExecuteNonQuery();

            // Đóng kết nối:
            sqlConnection.Close();
            return result;
        }

        // PUT: api/Customer/5
        [Route("")]
        public int Put([FromBody]Customer customer)
        {
            var customers = new List<Customer>();
            string connectionString = "Server=.;Database=MISA.WDT02.PVTRONG;Trusted_Connection=True;";
            // Khởi tạo đối tượng Sql Connection:
            SqlConnection sqlConnection = new SqlConnection(connectionString);

            // Đối tượng SQL Command cho phép thao tacs với CSDL:
            SqlCommand sqlCommand = sqlConnection.CreateCommand();
            sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            // Khai báo câu truy vấn:
            sqlCommand.CommandText = "dbo.Pro_UpdateCustomer";
            int customerStatus = 1;
            if (customer.Status == false)
            {
                customerStatus = 0;
            }
            
            // Gán giá trị đầu vào cho các tham số trong store:
            sqlCommand.Parameters.AddWithValue("@CustomerID", customer.CustomerID);
            sqlCommand.Parameters.AddWithValue("@CustomerCode", customer.CustomerCode);
            sqlCommand.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
            sqlCommand.Parameters.AddWithValue("@Mobile", customer.Mobile);
            sqlCommand.Parameters.AddWithValue("@GroupCustomer", customer.GroupCustomer);
            sqlCommand.Parameters.AddWithValue("@City", customer.City);
            sqlCommand.Parameters.AddWithValue("@District", customer.District);
            sqlCommand.Parameters.AddWithValue("@Commune", customer.Commune);
            sqlCommand.Parameters.AddWithValue("@Email", customer.Email);
            sqlCommand.Parameters.AddWithValue("@Birthday", customer.Birthday);
            sqlCommand.Parameters.AddWithValue("@TextNote", customer.TextNote);
            sqlCommand.Parameters.AddWithValue("@MemberCode", customer.MemberCode);
            sqlCommand.Parameters.AddWithValue("@Rank", customer.Rank);
            sqlCommand.Parameters.AddWithValue("@CMND", customer.CMND);
            sqlCommand.Parameters.AddWithValue("@Company", customer.Company);
            sqlCommand.Parameters.AddWithValue("@Taxcode", customer.MemberCode);
            sqlCommand.Parameters.AddWithValue("@CreatedDate", DateTime.Now);
            sqlCommand.Parameters.AddWithValue("@CreatedBy", "PVTRONG");
            sqlCommand.Parameters.AddWithValue("@ModifiedDate", DateTime.Now);
            sqlCommand.Parameters.AddWithValue("@Status", customerStatus );
            sqlCommand.Parameters.AddWithValue("@Street", customer.Street);

            // Mở kết nối tới Database:
            sqlConnection.Open();

            // Thực thi công việpc với Database
            var result = sqlCommand.ExecuteNonQuery();

            // Đóng kết nối:
            sqlConnection.Close();
            return result;
        }

        // DELETE: api/Customer/5
        [Route("{CustomerID}")]
        public int Delete(Guid CustomerID)
        {
            var customers = new List<Customer>();
            string connectionString = "Server=.;Database=MISA.WDT02.PVTRONG;Trusted_Connection=True;";
            // Khởi tạo đối tượng Sql Connection:
            SqlConnection sqlConnection = new SqlConnection(connectionString);

            // Đối tượng SQL Command cho phép thao tacs với CSDL:
            SqlCommand sqlCommand = sqlConnection.CreateCommand();
            sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            // Khai báo câu truy vấn:
            sqlCommand.CommandText = "dbo.Pro_DeleteCustomer";

            // Gán giá trị đầu vào cho các tham số trong store:
            sqlCommand.Parameters.AddWithValue("@CustomerID", CustomerID);

            // Mở kết nối tới Database:
            sqlConnection.Open();

            // Thực thi công việpc với Database
            var result = sqlCommand.ExecuteNonQuery();

            // Đóng kết nối:
            sqlConnection.Close();
            return result;
        }
    }
}
