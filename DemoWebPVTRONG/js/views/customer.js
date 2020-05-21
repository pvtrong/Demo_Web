$(document).ready(function () {
    var customerJS = new CustomerJS();

})

class CustomerJS {
    constructor() {
        //Gán mặc định FormMode:
        this.FormMode = null;
        this.filterMode = "all";
        this.filterNumber = 0;
        this.numberPage = parseInt($("#text-number-page").val());
        this.totalNumberPage;
        // Load dữ liệu:
        this.loadData();

        // Gán sự kiện:
        this.initEvents();
    }

    // Xử lý sự kiện
    initEvents() {
        var that = this;
        $("#btnAdd").click(this.btnAddOnClick.bind(this));
        $("#btnSave").click(this.btnSaveOnClick.bind(this));
        $("#btnSync").click(this.btnSyncOnClick.bind(this));
        $("#btnCopy").click(this.btnCopyOnClick.bind(this));
        $("#btnEdit").click(this.btnEditOnClick.bind(this));
        $("#btnDelete").click(this.btnDeletecOnClick.bind(this));
        $("#btnCancel").click(this.btnCancelOnClick.bind(this));
        $(".dialog [required]").blur(this.checkRequired);
        $("table tbody").on("click", "tr", this.rowOnSelect);
        $(".title-close-button").click(this.btnCancelOnClick.bind(this));
        $("#btnLimit").change(this.loadData.bind(this));                        //input limit number customer in page
        $("#text-number-page").change(this.numberPageNew.bind(this));           //input page event
        $("#next-page").click(this.nextPage.bind(this));                        //button next page event
        $("#previous-page").click(this.backPage.bind(this));                    //button previous page event
        $("#back-head-data").click(this.backHeadPage.bind(this));               //button back to head page event
        $("#goto-end-page").click(this.gotoEndPage.bind(this));                 //button go to end page event
        $(".filter").click(this.filterContent.bind(this));              // Gán sự kiện cho box filter
        $(".account").click(this.boxAccount.bind(this));              // Gán sự kiện cho box log-out, feedback

        for (var i = 1; i <= 14; i++) {
            $("#btnContain" + i).click(this.filterContain.bind(this));
        }
        for (var i = 1; i <= 14; i++) {
            $("#btnEqual" + i).click(this.filterEqual.bind(this));
        }
        for (var i = 1; i <= 14; i++) {
            $("#btnStart" + i).click(this.filterStart.bind(this));
        }
        for (var i = 1; i <= 14; i++) {
            $("#btnEnd" + i).click(this.filterEnd.bind(this));
        }
        for (var i = 1; i <= 14; i++) {
            $("#btnNot" + i).click(this.filterNot.bind(this));
        }
        $("#input-customer-code").change(this.loadData.bind(this));
        $("#input-customer-name").change(this.loadData.bind(this));
        $("#input-mobile").change(this.loadData.bind(this));
        $("#input-email").change(this.loadData.bind(this));
        $("#input-city").change(this.loadData.bind(this));
        $("#input-district").change(this.loadData.bind(this));
        $("#input-commune").change(this.loadData.bind(this));
        $("#input-street").change(this.loadData.bind(this));
        $("#input-group-customer").change(this.loadData.bind(this));
        $("#input-birthday").change(this.loadData.bind(this));
        $("#input-member-code").change(this.loadData.bind(this));
        $("#input-rank").change(this.loadData.bind(this));
        $("#input-text-note").change(this.loadData.bind(this));
        $("#input-status").change(this.loadData.bind(this));
        // filterbox 
        window.onclick = function (event) {
            switch (event.target.id) {
                case "filter-customer-code": {
                    if ($(".filter-box#box-1").hasClass("show-box")) {
                        $(".filter-box#box-1").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-1").addClass("show-box");
                    }
                    that.filterNumber = 1;
                    break;
                }
                case "filter-customer-name": {
                    if ($(".filter-box#box-2").hasClass("show-box")) {
                        $(".filter-box#box-2").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-2").addClass("show-box");
                    }
                    that.filterNumber = 2;
                    break;
                }

                case "filter-mobile": {
                    if ($(".filter-box#box-3").hasClass("show-box")) {
                        $(".filter-box#box-3").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-3").addClass("show-box");
                    }
                    that.filterNumber = 3;
                    break;
                }
                case "filter-email": {
                    if ($(".filter-box#box-4").hasClass("show-box")) {
                        $(".filter-box#box-4").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-4").addClass("show-box");
                    }
                    that.filterNumber = 4;
                    break;
                }
                case "filter-city": {
                    if ($(".filter-box#box-5").hasClass("show-box")) {
                        $(".filter-box#box-5").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-5").addClass("show-box");
                    }
                    that.filterNumber = 5;
                    break;
                }
                case "filter-district": {
                    if ($(".filter-box#box-6").hasClass("show-box")) {
                        $(".filter-box#box-6").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-6").addClass("show-box");
                    }
                    that.filterNumber = 6;
                    break;
                }
                case "filter-commune": {
                    if ($(".filter-box#box-7").hasClass("show-box")) {
                        $(".filter-box#box-7").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-7").addClass("show-box");
                    }
                    that.filterNumber = 7;
                    break;
                }
                case "filter-street": {
                    if ($(".filter-box#box-8").hasClass("show-box")) {
                        $(".filter-box#box-8").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-8").addClass("show-box");
                    }
                    that.filterNumber = 8;
                    break;
                }
                case "input-birthday": {
                    that.filterNumber = 9;
                    break;
                }
                case "input-group-customer": {
                    that.filterNumber = 10;
                    break;
                }
                case "filter-member-code": {
                    if ($(".filter-box#box-11").hasClass("show-box")) {
                        $(".filter-box#box-11").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-11").addClass("show-box");
                    }
                    that.filterNumber = 11;
                    break;
                }
                case "filter-rank": {
                    if ($(".filter-box#box-12").hasClass("show-box")) {
                        $(".filter-box#box-12").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-12").addClass("show-box");
                    }
                    that.filterNumber = 12;
                    break;
                }
                case "filter-text-note": {
                    if ($(".filter-box#box-13").hasClass("show-box")) {
                        $(".filter-box#box-13").removeClass("show-box")
                    }
                    else {
                        $(".column-filter .filter-box").removeClass("show-box");
                        $(".filter-box#box-13").addClass("show-box");
                    }
                    that.filterNumber = 13;
                    break;
                }
                case "input-status": {
                    that.filterNumber = 14;
                    break;
                }
                default: {
                    $(".column-filter .filter-box").removeClass("show-box");
                    break;
                }

            }
        }
    }


    filterContain() {
        this.filterMode = "contain";
        this.loadData();
    }
    filterEqual() {
        this.filterMode = "equal";
        this.loadData();
    }
    filterStart() {
        this.filterMode = "start";
        this.loadData();
    }
    filterEnd() {
        this.filterMode = "end";
        this.loadData();
    }
    filterNot() {
        this.filterMode = "not";
        this.loadData();
    }

    // Hàm lấy dữ liệu
    loadData() {
        var self = this;
        // Lấy data từ api service:
        $.ajax({
            url: "/customers",
            method: "GET",
            data: "", // Tham số truyền qua body request
            contentType: "application/json",
            dataType: ""
        }).done(function (response) {
            debugger;
            switch (self.filterNumber) {
                case 1: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-code' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.CustomerCode.toLowerCase().includes($("#input-customer-code").val().toLowerCase()));

                            $('#filter-customer-code').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-code'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.CustomerCode.toLowerCase() === ($("#input-customer-code").val().toLowerCase()));

                            $('#filter-customer-code').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-code'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.CustomerCode.toLowerCase().startsWith($("#input-customer-code").val().toLowerCase()));

                            $('#filter-customer-code').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-code' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.CustomerCode.toLowerCase().endsWith($("#input-customer-code").val().toLowerCase()));

                            $('#filter-customer-code').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-code' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.CustomerCode.toLowerCase().includes($("#input-customer-code").val().toLowerCase()));

                            $('#filter-customer-code').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 2: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-name' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.CustomerName.toLowerCase().includes($("#input-customer-name").val().toLowerCase()));

                            $('#filter-customer-name').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-name'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.CustomerName.toLowerCase() === ($("#input-customer-name").val().toLowerCase()));

                            $('#filter-customer-name').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-name'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.CustomerName.toLowerCase().startsWith($("#input-customer-name").val().toLowerCase()));

                            $('#filter-customer-name').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-name' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.CustomerName.toLowerCase().endsWith($("#input-customer-name").val().toLowerCase()));

                            $('#filter-customer-name').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-customer-name' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.CustomerName.toLowerCase().includes($("#input-customer-name").val().toLowerCase()));

                            $('#filter-customer-name').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 3: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-mobile' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.Mobile.toLowerCase().includes($("#input-mobile").val().toLowerCase()));

                            $('#filter-mobile').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-mobile'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.Mobile.toLowerCase() === ($("#input-mobile").val().toLowerCase()));

                            $('#filter-mobile').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-mobile'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.Mobile.toLowerCase().startsWith($("#input-mobile").val().toLowerCase()));

                            $('#filter-mobile').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-mobile' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.Mobile.toLowerCase().endsWith($("#input-mobile").val().toLowerCase()));

                            $('#filter-mobile').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-mobile' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.Mobile.toLowerCase().includes($("#input-mobile").val().toLowerCase()));

                            $('#filter-mobile').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 4: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-email' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.Email.toLowerCase().includes($("#input-email").val().toLowerCase()));

                            $('#filter-email').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-email'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.Email.toLowerCase() === ($("#input-email").val().toLowerCase()));

                            $('#filter-email').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-email'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.Email.toLowerCase().startsWith($("#input-email").val().toLowerCase()));

                            $('#filter-eamil').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-email' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.Email.toLowerCase().endsWith($("#input-email").val().toLowerCase()));

                            $('#filter-email').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-email' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.Email.toLowerCase().includes($("#input-email").val().toLowerCase()));

                            $('#filter-email').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 5: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-city' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.City.toLowerCase().includes($("#input-city").val().toLowerCase()));

                            $('#filter-city').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-city'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.City.toLowerCase() === ($("#input-city").val().toLowerCase()));

                            $('#filter-city').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-city'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.City.toLowerCase().startsWith($("#input-city").val().toLowerCase()));

                            $('#filter-city').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-city' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.City.toLowerCase().endsWith($("#input-city").val().toLowerCase()));

                            $('#filter-city').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-city' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.City.toLowerCase().includes($("#input-city").val().toLowerCase()));

                            $('#filter-city').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 6: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-district' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.District.toLowerCase().includes($("#input-district").val().toLowerCase()));

                            $('#filter-district').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-district'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.District.toLowerCase() === ($("#input-district").val().toLowerCase()));

                            $('#filter-district').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-district'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.District.toLowerCase().startsWith($("#input-district").val().toLowerCase()));

                            $('#filter-district').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-district' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.District.toLowerCase().endsWith($("#input-district").val().toLowerCase()));

                            $('#filter-district').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-district' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.District.toLowerCase().includes($("#input-district").val().toLowerCase()));

                            $('#filter-district').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 7: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-commune' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.Commnune.toLowerCase().includes($("#input-commune").val()));

                            $('#filter-commune').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-commune'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.Commnune.toLowerCase() === ($("#input-commune").val().toLowerCase()));

                            $('#filter-commune').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-commune'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.Commnune.toLowerCase().startsWith($("#input-commune").val().toLowerCase()));

                            $('#filter-commune').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-commune' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.Commnune.toLowerCase().endsWith($("#input-commune").val().toLowerCase()));

                            $('#filter-commune').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-commune' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.Commnune.toLowerCase().includes($("#input-commune").val().toLowerCase()));

                            $('#filter-commune').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 8: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-street' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.Street.toLowerCase().includes($("#input-street").val()));

                            $('#filter-street').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-street'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.Street.toLowerCase() === ($("#input-street").val().toLowerCase()));

                            $('#filter-street').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-street'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.Street.toLowerCase().startsWith($("#input-street").val().toLowerCase()));

                            $('#filter-street').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-street' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.Street.toLowerCase().endsWith($("#input-street").val().toLowerCase()));

                            $('#filter-street').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-street' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.Street.toLowerCase().includes($("#input-street").val().toLowerCase()));

                            $('#filter-street').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 9: {
                    response = response.filter(x => x.Birthday.includes($("#input-birthday").val()));

                    break;
                }
                case 10: {
                    response = response.filter(x => x.GroupCustomer === $("#input-group-customer").val());
                    break;
                }
                case 11: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-member-code' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.MemberCode.toString().toLowerCase().includes($("#input-member-code").val().toLowerCase()));

                            $('#filter-member-code').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-member-code'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.MemberCode.toString().toLowerCase() === ($("#input-member-code").val().toLowerCase()));

                            $('#filter-member-code').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-member-code'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.MemberCode.toString().toLowerCase().startsWith($("#input-member-code").val().toLowerCase()));

                            $('#filter-member-code').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-member-code' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.MemberCode.toString().toLowerCase().endsWith($("#input-member-code").val().toLowerCase()));

                            $('#filter-member-code').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-member-code' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.MemberCode.toString().toLowerCase().includes($("#input-member-code").val()));

                            $('#filter-member-code').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 12: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-rank' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.Rank.toLowerCase().includes($("#input-rank").val().toLowerCase()));

                            $('#filter-rank').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-rank'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.Rank.toLowerCase() === ($("#input-rank").val().toLowerCase()));

                            $('#filter-rank').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-rank'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.Rank.toLowerCase().startsWith($("#input-rank").val().toLowerCase()));

                            $('#filter-rank').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-rank' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.Rank.toLowerCase().endsWith($("#input-rank").val().toLowerCase()));

                            $('#filter-rank').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-rank' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.Rank.toLowerCase().includes($("#input-rank").val().toLowerCase()));

                            $('#filter-rank').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 13: {
                    switch (self.filterMode) {
                        case "contain": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-text-note' class='text-box-filter'> @ </h4>";
                            response = response.filter(x => x.TextNote.toLowerCase().includes($("#input-text-note").val().toLowerCase()));

                            $('#filter-text-note').append(textBoxFilter);
                            break;
                        }
                        case "equal": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-text-note'class='text-box-filter'> = </h4>";
                            response = response.filter(x => x.TextNote.toLowerCase() === ($("#input-text-note").val().toLowerCase()));

                            $('#filter-text-note').append(textBoxFilter);
                            break;
                        }
                        case "start": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-text-note'class='text-box-filter'> + </h4>";
                            response = response.filter(x => x.TextNote.toLowerCase().startsWith($("#input-text-note").val().toLowerCase()));

                            $('#filter-text-note').append(textBoxFilter);
                            break;
                        }
                        case "end": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-text-note' class='text-box-filter'> - </h4>";
                            response = response.filter(x => x.TextNote.toLowerCase().endsWith($("#input-text-note").val().toLowerCase()));

                            $('#filter-text-note').append(textBoxFilter);
                            break;
                        }
                        case "not": {
                            $('.text-box-filter').remove();
                            var textBoxFilter = "<h4 id='filter-text-note' class='text-box-filter'> ! </h4>";
                            response = response.filter(x => !x.TextNote.toLowerCase().includes($("#input-text-note").val().toLowerCase()));

                            $('#filter-text-note').append(textBoxFilter);
                            break;
                        }

                    }
                    break;
                }
                case 14: {
                    if ($("#input-status").val() === "Đang theo dõi") {
                        response = response.filter(x => x.Status === true);
                    } else if ($("#input-status").val() === "Ngừng theo dõi") {
                        response = response.filter(x => x.Status === false);
                    }
                    break;
                }
                    break;


            }
            var numberCustomer = response.length;

            self.checkNumberPage();
            var numberLimitData = parseInt($("#btnLimit").val());
            self.totalNumberPage = Math.ceil(response.length / numberLimitData);
            var textNumberPage = "<span id='total-number-page'> trên " + parseInt(self.totalNumberPage) + "</span>";
            $('#total-number-page').remove();
            $('#number-of-page').append(textNumberPage);
            response = response.slice((self.numberPage - 1) * numberLimitData, self.numberPage * numberLimitData);
            $('#between-customer').remove();
            var betweenCustomer = "<span id='between-customer'> Hiển thị " + ((self.numberPage - 1) * numberLimitData + 1) + " - " + ((self.numberPage - 1) * numberLimitData + response.length) + " trên " + (numberCustomer) + " kết quả</span>";
            $('.paging-content').append(betweenCustomer);
            self.render(response);
        }).fail(function (response) {

        })
    }

    // Hàm xử lý sự kiện next page
    nextPage() {
        debugger;
        if (this.numberPage < this.totalNumberPage) {
            this.numberPage++;
            this.loadData();
            this.checkNumberPage();
        }

    }


    // Hàm check xem đang ở page bao nhiêu
    checkNumberPage() {
        if (this.numberPage == 1) {
            $("#previous-page").addClass("cant-back-page");
            $("#back-head-data").addClass("cant-head-page");
            if ($("#goto-end-page").hasClass("cant-end-page")) {
                $("#goto-end-page").removeClass("cant-end-page");
            }
            if ($("#next-page").hasClass("cant-next-page")) {
                $("#next-page").removeClass("cant-next-page");
            }
        }
        else if (this.numberPage == this.totalNumberPage) {
            $("#next-page").addClass("cant-next-page");
            $("#goto-end-page").addClass("cant-end-page");
            if ($("#back-head-data").hasClass("cant-head-page")) {
                $("#back-head-data").removeClass("cant-head-page");
            }
            if ($("#previous-page").hasClass("cant-back-page")) {
                $("#previous-page").removeClass("cant-back-page");
            }
        }
        else {
            if ($("#back-head-data").hasClass("cant-head-page")) {
                $("#back-head-data").removeClass("cant-head-page");
            }
            if ($("#previous-page").hasClass("cant-back-page")) {
                $("#previous-page").removeClass("cant-back-page");
            }
            if ($("#goto-end-page").hasClass("cant-end-page")) {
                $("#goto-end-page").removeClass("cant-end-page");
            }
            if ($("#next-page").hasClass("cant-next-page")) {
                $("#next-page").removeClass("cant-next-page");
            }
        }
        $("#text-number-page").val(this.numberPage);
    }


    // Hàm xử lý sự kiện back page:
    backPage() {
        if (this.numberPage > 1) {
            this.numberPage--;
            this.loadData();
            this.checkNumberPage();
        }
    }

    // Hàm xử lý sự kiện quay về trang đầu:
    backHeadPage() {
        debugger;
        if (this.numberPage != 1) {
            this.numberPage = 1;
            this.loadData();
            this.checkNumberPage();
        }

    }

    // Hàm xử lý sự kiện về trang cuối:
    gotoEndPage() {
        debugger;
        if (this.numberPage != this.totalNumberPage) {
            this.numberPage = this.totalNumberPage;
            this.checkNumberPage();
            this.loadData();
        }

    }


    // Hàm xử lý sự kiện khi thay đổi input đến trang bao nhiêu:
    numberPageNew() {
        this.numberPage = parseInt($("#text-number-page").val());

        this.loadData();
        this.checkNumberPage();
    }



    render(data) {
        $("table tbody").empty();
        if (data.length > 0) {
            $.each(data, function (index, item) {
                var fields = $("table thead th");
                var rowHTML = "<tr CustomerID='" + item.CustomerID + "'></tr>";
                var currentRowIndex = index + 1;
                var rowClass = "";
                if (currentRowIndex % 2 == 0) {
                    rowClass = "row-even";
                    rowHTML = '<tr  CustomerID="' + item.CustomerID + '" class="' + rowClass + '"></tr>'
                }
                $.each(fields, function (i, field) {
                    var fieldName = $(field).find("[fieldData]").attr('fieldData');
                    var dataType = $(field).find("[fieldData]").attr('dataType');
                    dataType = dataType ? dataType.toLowerCase() : null;
                    var value = item[fieldName] ? item[fieldName] : "";

                    switch (dataType) {
                        case "date":
                            var dateString = "";
                            if (value) {
                                value = new Date(value);
                                dateString = value.formatddMMyyyy();
                            }
                            rowHTML = $(rowHTML).append('<td class="text-align-center">' + dateString + '</td>');
                            break;
                        case "number":
                            rowHTML = $(rowHTML).append('<td class="text-align-left">' + value + '</td>');
                            break;
                        case "string":
                            rowHTML = $(rowHTML).append('<td>' + value + '</td>');
                            break;
                        case "boolean":
                            var checkbox = "Ngừng theo dõi";
                            if (value) {
                                checkbox = "Đang theo dõi";
                            }
                            rowHTML = $(rowHTML).append('<td class="text-align-center">' + checkbox + '</td>');
                            break;

                        default:
                            rowHTML = $(rowHTML).append('<td>' + value + '</td>');
                            break;
                    }


                })
                $('table tbody').append(rowHTML);
            })

        }
    }

    // Hàm xử lý sự kiện thêm dữ liệu
    btnAddOnClick() {
        this.FormMode = "add";
        this.showDialogDetail();
    }

    // Hàm đồng bộ lại dữ liệu
    btnSyncOnClick() {
        this.loadData();
    }

    /*
    * Thực hiện sửa dữ liệu:
    */
    btnEditOnClick() {
        debugger;
        this.FormMode = "edit";
        var self = this;
        // Lấy dữ liệu của khách hàng tương ứng đã chọn: 
        //1. Xác định khách hàng được chọn:
        var customerID = self.getID();
        //2. Lấy thông tin Mã khách hàng:
        if (customerID) {
            debugger;
            // Hiển thị form chi tiết
            self.showDialogDetail();
            $.ajax({
                url: "/customers/" + customerID,
                method: "GET"
            }).done(function (res) {
                if (!res) {
                    alert("Không có khách hàng với mã tương ứng")
                } else {
                    debugger;
                    // Bindding các thông tin của khách hàng lên form:
                    $("#txtCustomerCode").val(res["CustomerCode"]);
                    $("#txtCustomerName").val(res["CustomerName"]);
                    $("#txtGroupCustomer").val(res["GroupCustomer"]);
                    $("#txtMobile").val(res["Mobile"]);
                    $("#txtCity").val(res["City"]);
                    $("#txtDistrict").val(res["District"]);
                    $("#txtCommune").val(res["Commnune"]);
                    $("#txtStreet").val(res["Street"]);
                    $("#txtEmail").val(res["Email"]);
                    $("#txtBirthday").val(convert(new Date(res["Birthday"])));
                    $("#txtTextnote").val(res["TextNote"]);
                    $("#txtMemberCode").val(res["MemberCode"]);
                    $("#txtRank").val(res["Rank"]);
                    $("#txtCMND").val(res["CMND"]);
                    $("#txtCompany").val(res["Company"]);
                    $("#txtTaxcode").val(res["Taxcode"]);
                    if (res["Status"]) {
                        $("#txtStatus").attr("checked", "checked");
                    }
                    else $("#txtStatus").removeAttr("checked", "checked");


                    debugger;
                }
            }).fail(function (res) {

            })
        }
        else {
            alert("Bạn chưa chọn khách hàng nào!");
        }
    }

    /*
    * Thực hiện sửa dữ liệu:
    */
    btnCopyOnClick() {
        debugger;
        this.FormMode = "add";
        var self = this;
        // Lấy dữ liệu của khách hàng tương ứng đã chọn: 
        //1. Xác định khách hàng được chọn:
        var customerID = self.getID();
        //2. Lấy thông tin Mã kháhc hàng:
        if (customerID) {
            debugger;
            // Hiển thị form chi tiết
            self.showDialogDetail();
            $.ajax({
                url: "/customers/" + customerID,
                method: "GET"
            }).done(function (res) {
                if (!res) {
                    alert("Không có khách hàng với mã tương ứng")
                } else {
                    debugger;
                    // Bindding các thông tin của khách hàng lên form:
                    
                    $("#txtCustomerName").val(res["CustomerName"]);
                    $("#txtGroupCustomer").val(res["GroupCustomer"]);
                    $("#txtMobile").val(res["Mobile"]);
                    $("#txtCity").val(res["City"]);
                    $("#txtDistrict").val(res["District"]);
                    $("#txtCommune").val(res["Commnune"]);
                    $("#txtStreet").val(res["Street"]);
                    $("#txtEmail").val(res["Email"]);
                    $("#txtBirthday").val(convert(new Date(res["Birthday"])));
                    $("#txtTextnote").val(res["TextNote"]);
                    $("#txtMemberCode").val(res["MemberCode"]);
                    $("#txtRank").val(res["Rank"]);
                    $("#txtCMND").val(res["CMND"]);
                    $("#txtCompany").val(res["Company"]);
                    $("#txtTaxcode").val(res["Taxcode"]);
                    if (res["Status"]) {
                        $("#txtStatus").attr("checked", "checked");
                    }
                    else $("#txtStatus").removeAttr("checked", "checked");


                    debugger;
                }
            }).fail(function (res) {

            })
        }
        else {
            alert("Bạn chưa chọn khách hàng nào!");
        }
    }

    filterContent() {
        debugger;
        if ($(".box-filter-all").is(":hidden") ) {
            
            this.showFilterBox();
        }
        else this.hideFilterBox();
        
    }
    
    showFilterBox() {
        $(".box-filter-all").show();
    }

    hideFilterBox() {
        $(".box-filter-all").hide();
    }

    boxAccount() {
        if ($(".box-account").is(":hidden")) {

            this.showAccountBox();
        }
        else this.hideAccountBox();
    }

    showAccountBox() {
        $(".box-account").show();
    }
    hideAccountBox() {
        $(".box-account").hide();
    }

    // Hàm lấy Id của người được chọn:
    getID() {
        debugger;
        var id = $(".tblInWard tr.row-selected[customerid]");
        return id.attr("customerid");
    }


    // Hàm xoá khách hàng được chọn:
    btnDeletecOnClick() {
        debugger;
        var self = this;
        // Lấy dữ liệu của khách hàng tương ứng đã chọn: 
        //1. Xác định mã khách hàng được chọn:
        var customerID = self.getID();
        if (customerID) {
            $.ajax({
                url: "/customers/" + customerID,
                method: "DELETE"
            }).done(function (res) {
                debugger;
                if (!res) {
                    alert("Khách hàng này không còn tồn tại trên hệ thống!");
                } else {
                    alert("Bạn đã xoá thành công!");
                    self.loadData();
                }
            }).fail(function (res) {

            })
        }
        else {
            alert("Bạn chưa chọn khách hàng nào!");
        }
    }

    /*
    * Thực hiện cất dữ liệu
    */
    btnSaveOnClick() {
        debugger;
        //Validate dữ liệu nhập trên form (Kiểm tra xem dữ liệu nhập trên form có đúng hay không?)

        var method = "PUT";
        var inputRequired = $("[required]");
        var isValid = true;
        $.each(inputRequired, function (index, input) {
            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("required-error")) {
                isValid = false;
            }
        })
        if (isValid) {
            // Thu thập thông tin trên form
            var customer = {};
            var self = this;
            customer.CustomerID = self.getID();
            customer.customerCode = $("#txtCustomerCode").val();
            customer.customerName = $("#txtCustomerName").val();
            customer.groupCustomer = $("#txtGroupCustomer").val();
            customer.mobile = $("#txtMobile").val();
            customer.city = $("#txtCity").val();
            customer.district = $("#txtDistrict").val();
            customer.commune = $("#txtCommune").val();
            customer.street = $("#txtStreet").val();
            customer.email = $("#txtEmail").val();
            customer.Birthday = $("#txtBirthday").val();
            customer.TextNote = $("#txtTextnote").val();
            customer.MemberCode = $("#txtMemberCode").val();
            customer.Rank = $("#txtRank").val();
            customer.CMND = $("#txtCMND").val();
            customer.Company = $("#txtCompany").val();
            customer.Taxcode = $("#txtTaxcode").val();
            if ($("#txtStatus")[0].hasAttribute("checked")) {
                customer.Status = true;
            }
            else customer.Status = false;

            debugger;
            // Thực hiện cất dữ liệu
            if (self.FormMode == "add") {
                method = "POST"
            }
            $.ajax({
                url: "/customers",
                method: method,
                data: JSON.stringify(customer),
                contentType: "application/json",
                dataType: "json"
            }).done(function (res) {
                // Khi có dữ liệu thì load lại data
                self.loadData();
                self.hideDialogDetail();
                self.FormMode = null;
            }).fail(function (res) {

            })


        }
    }


    // Hàm highlight dòng đã chọn:
    rowOnSelect() {
        $(this).siblings().removeClass("row-selected");
        if ($(this).hasClass("row-selected")) {
            $(this).removeClass("row-selected");
        }
        else $(this).addClass("row-selected");
    }

    // Hàm check validate:
    checkRequired() {
        var value = this.value;
        if (!value) {
            $(this).addClass("required-error");
            $(this).attr("title", "Bạn phải nhập thông tin này");
        } else {
            $(this).removeClass("required-error");
            $(this).removeAttr("title", "Bạn phải nhập thông tin này");
        }

    }




    // Xử lý sự kiện nút huỷ:
    btnCancelOnClick() {
        this.hideDialogDetail();
    }


    // 2 Hàm hiện và ẩn form dialog
    showDialogDetail() {
        // Clean tất cả các giá trị cũ input trong form: 
        $(".dialog input").val(null);
        $('.dialog-modal').show();
        $('.dialog').show();
        $("#txtCustomerCode").focus();
    }
    hideDialogDetail() {
        $('.dialog-modal').hide();
        $('.dialog').hide();
    }

}
