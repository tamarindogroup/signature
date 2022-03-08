    //data

    var gen={};

    function loadData() {

    gen.companies = [];
    gen.companies[0] = {};
    gen.companies[1] = {};
    gen.companies[2] = {};
    gen.activeCompanyIndex = null;
    gen.activeSocialMediaIndex = null;
    // gen.banners = [];

    // gen.banners[0].name = "FWNA 2020";
    // gen.banners[0].src = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Banners/FWNA2020-FooterBanner-General.png";
    // gen.banners[0].url = "https://northamerica.financingwind.com";
    // gen.banners[0].alt = "Financing Wind North America 2020";

    // gen.banners[1].name = "RRI Europe 2020";
    // gen.banners[1].src = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Banners/RRI-Europe-2019-Banner-600x150.png";
    // gen.banners[1].url = "http://renewablesreputationindex.com/";
    // gen.banners[1].alt = "Renewables Reputation Index Europe 2019";

    // gen.banners[2].name = "North American Power List 2020";
    // gen.banners[2].src = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Banners/AWAW-NorthAmericanPowerList2020-Banner-600x150.png";
    // gen.banners[2].url = "http://membership.awordaboutwind.com/north-american-power-list-2020";
    // gen.banners[2].alt = "North American Power List 2020";


    //TG

    gen.companies[0].name = "Tamarindo Group";

    gen.companies[0].primaryUrl = "www.tamarindogroup.com";
    gen.companies[0].secondaryUrl = "";
    gen.companies[0].hasSecondaryURL = false;

    gen.companies[0].phone1 = "+44 (0) 20 7100 1616";
    gen.companies[0].phone2 = "+1 917 310 3307";
    gen.companies[0].phone3 = "";
    gen.companies[0].hasPhone2 = true;
    gen.companies[0].hasPhone3 = false;

    gen.companies[0].twitterUrl = "https://twitter.com/tamarindogroup";
    gen.companies[0].linkedinUrl = "https://www.linkedin.com/company/tamarindo-group/";

    gen.companies[0].logo = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/TamarindoGroup-Logo-VerticalBlue-Tight-RGB-150px.png";
    gen.companies[0].twitterIcon = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-Twitter-TC.png";
    gen.companies[0].linkedinIcon = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-LinkedIn-TC.png";

    gen.companies[0].legal = "The Tamarindo Consultancy Group Limited, trading as Tamarindo Group.  Registered in England: 08594866. Registered office: 2nd Floor, 167-169 Great Portland Street, London, W1W 5PF. Tamarindo Communications, Tamarindo Networks & Tamarindo Insight are a part of Tamarindo Group.";
    gen.companies[0].color = "#242b61";
    gen.companies[0].address = "Tamarindo Group, Tyndale House, 3rd Floor, 134 Cowley Road, Oxford, OX4 1JH"

    //TC

    gen.companies[1].name = "Tamarindo Communications";

    gen.companies[1].primaryUrl = "www.tamarindocomms.com";
    gen.companies[1].secondaryUrl = "www.tamarindogroup.com";
    gen.companies[1].hasSecondaryURL = true;

    gen.companies[0].phone1 = "+44 (0) 20 7100 1616";
    gen.companies[0].phone2 = "+1 917 310 3307";
    gen.companies[0].phone3 = "";
    gen.companies[0].hasPhone2 = true;
    gen.companies[0].hasPhone3 = false;

    gen.companies[1].twitterUrl = "https://twitter.com/tamarindocomms";
    gen.companies[1].linkedinUrl = "https://www.linkedin.com/company/tamarindo-communications/";

    gen.companies[1].logo = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/TamarindoCommunications-Logo-VerticalBlue-Tight-RGB-150px.png";
    gen.companies[1].twitterIcon = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-Twitter-TC.png";
    gen.companies[1].linkedinIcon = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-LinkedIn-TC.png";

    gen.companies[1].legal = "The Tamarindo Consultancy Group Limited, trading as Tamarindo Group.  Registered in England: 08594866. Registered office: 2nd Floor, 167-169 Great Portland Street, London, W1W 5PF. Tamarindo Communications, Tamarindo Networks & Tamarindo Insight are a part of Tamarindo Group.";
    gen.companies[1].color = "#242b61";
    gen.companies[1].address = "Tamarindo Group, Tyndale House, 3rd Floor, 134 Cowley Road, Oxford, OX4 1JH"


    //AWAW

    gen.companies[2].name = "A Word About Wind";

    gen.companies[2].primaryUrl = "www.awordaboutwind.com";
    gen.companies[2].secondaryUrl = "www.tamarindogroup.com";
    gen.companies[2].hasSecondaryURL = true;

    gen.companies[0].phone1 = "+44 (0) 20 7100 1616";
    gen.companies[0].phone2 = "+1 917 310 3307";
    gen.companies[0].phone3 = "";
    gen.companies[0].hasPhone2 = true;
    gen.companies[0].hasPhone3 = false;

    gen.companies[2].twitterUrl = "https://twitter.com/awordaboutwind";
    gen.companies[2].linkedinUrl = "https://www.linkedin.com/company/awordaboutwind-com/";

    gen.companies[2].logo = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-Logo-AWAW.png";
    gen.companies[2].twitterIcon = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-Twitter-TC.png";
    gen.companies[2].linkedinIcon = "https://cdn2.hubspot.net/hubfs/3372701/TG-Email-Signatures/Signature-LinkedIn-TC.png";

    gen.companies[2].legal = "The Tamarindo Consultancy Group Limited, trading as Tamarindo Group.  Registered in England: 08594866. Registered office: 2nd Floor, 167-169 Great Portland Street, London, W1W 5PF. Tamarindo Communications, Tamarindo Networks & Tamarindo Insight are a part of Tamarindo Group.";
    gen.companies[2].color = "#04798F";
    gen.companies[2].address = "Tamarindo Group, Tyndale House, 3rd Floor, 134 Cowley Road, Oxford, OX4 1JH"



    }



    //get form fields

    function getFormContents () {
        gen.form = {};
        gen.form.name = document.getElementById("input-name").value;
        gen.form.title = document.getElementById("input-title").value;
        gen.form.company = document.getElementById("input-company").value;
        gen.form.socialmedia = document.getElementById("input-socialmedia").value;
        gen.form.email = document.getElementById("input-email").value;
        gen.form.phone1 = document.getElementById("input-phone1").value;
        gen.form.phone2 = document.getElementById("input-phone2").value;
        gen.form.phone3 = document.getElementById("input-phone3").value;
        gen.form.web1 = document.getElementById("input-web1").value;
        gen.form.web2 = document.getElementById("input-web2").value;
        gen.form.address = document.getElementById("input-address").value;
        gen.form.legal = document.getElementById("input-legal").value;
        gen.form.bannerSrc = document.getElementById("input-bannerSrc").value;
        gen.form.bannerURL = document.getElementById("input-bannerURL").value;
        gen.form.bannerAlt = document.getElementById("input-bannerAlt").value;

        // gen.activeCompanyIndex = 0;

        if (gen.form.company == "Tamarindo Group") {
            gen.activeCompanyIndex = 0;
        }
        else if (gen.form.company == "Tamarindo Communications") {
            gen.activeCompanyIndex=1;
        }
        else if (gen.form.company == "A Word About Wind") {
            gen.activeCompanyIndex=2;
        }
        else {}

        //social media

            if (gen.form.socialmedia == "Tamarindo Group") {
                gen.activeSocialMediaIndex = 0;
            }
            else if (gen.form.socialmedia == "Tamarindo Communications") {
                gen.activeSocialMediaIndex=1;
            }
            else if (gen.form.socialmedia == "A Word About Wind") {
                gen.activeSocialMediaIndex=2;
            }
            else {}




    }

    function updateFormOnCompanySelect () {


        getFormContents();

        updateFormWithCompany(gen.activeCompanyIndex);

        function updateFormWithCompany(index) {
            var comp = gen.companies[index];

            document.getElementById("input-phone1").value = comp.phone1;
            if (comp.hasPhone2==true) {
                document.getElementById("input-phone2").value = comp.phone2;
            }
            else {
                document.getElementById("input-phone2").value = "";
            }

            document.getElementById("input-web1").value = comp.primaryUrl;
            if (comp.hasSecondaryURL==true) {
                document.getElementById("input-web2").value = comp.secondaryUrl;
            }
            else {
                document.getElementById("input-web2").value = "";
            }

            document.getElementById("input-legal").value = comp.legal;

            document.getElementById("input-address").value = comp.address;


        }

    }

    function updateSig () {

        getFormContents();

        function addHTTP(str) {
            if(str.startsWith("http")) {
                return str;
            }
            else {
                return "https://" + str;
            }
        }

        var activeCompany = gen.companies[gen.activeCompanyIndex];
        var activeSocialMediaCompany = gen.companies[gen.activeSocialMediaIndex];

        //name
            document.getElementById("name").innerHTML = gen.form.name;

        //title
            document.getElementById("title").innerHTML = gen.form.title;

        //company
            document.getElementById("company").innerHTML = gen.form.company;
        
        //email
            document.getElementById("link-email").innerHTML = gen.form.email;
            document.getElementById("link-email").setAttribute("href","mailto:"+gen.form.email);
            if(gen.form.email == "") {document.getElementById("link-email").remove()}
        
        //phone
            if(gen.form.phone1=="") {
                document.getElementById("phone1").remove();
                document.getElementById("phone-sep").remove();
            }
            else {
                document.getElementById("phone1").innerHTML = gen.form.phone1;
            }

            if(gen.form.phone2=="") {
                document.getElementById("phone2").remove();
                document.getElementById("phone-sep").remove();
            }
            else {
                document.getElementById("phone2").innerHTML = gen.form.phone2;
            }

            if(gen.form.phone3=="") {
                document.getElementById("phone3").remove();
                document.getElementById("phone-sep-2").remove();
            }
            else {
                document.getElementById("phone-sep-2").innerHTML = "&nbsp; | &nbsp;";
                document.getElementById("phone3").innerHTML = gen.form.phone3;
            }
        
        //web
            if(gen.form.web2=="") {
                document.getElementById("link-web1").remove();
                document.getElementById("web-sep").remove();
            }
            else {
                document.getElementById("link-web1").innerHTML = gen.form.web1;
                document.getElementById("link-web1").setAttribute("href", addHTTP(gen.form.web1));
            }
            if(gen.form.web2=="") {
                document.getElementById("web-sep").remove();
                document.getElementById("link-web2").remove();
            }
            else {
                document.getElementById("web-sep").innerHTML = "  |  ";
                document.getElementById("link-web2").innerHTML = gen.form.web2;
                document.getElementById("link-web2").setAttribute("href", addHTTP(gen.form.web2));
            }
            
        //address
            document.getElementById("address").innerHTML = gen.form.address;
        
        //logo
            document.getElementById("img-logo").setAttribute("src",activeCompany.logo);
            document.getElementById("link-logo").setAttribute("href", addHTTP(gen.form.web1));


        //banner
            document.getElementById("link-banner").setAttribute("href", addHTTP(gen.form.bannerURL));

            //re-add banner if previously removed
            document.getElementById("link-banner").innerHTML = "<img id=\"img-banner\" width=\"540\" src=\"https://cdn2.hubspot.net/hubfs/3372701/TC-RRI/RRI-EU-2019/RRI-Europe-2019-Banner-600x150.png\" alt=\"\" style=\"max-width: 540px\">"

            document.getElementById("img-banner").setAttribute("src",addHTTP(gen.form.bannerSrc));
            document.getElementById("img-banner").setAttribute("alt",gen.form.bannerAlt);

            //if no banner source, just remove the img element as otherwise it takes up space
            if(gen.form.bannerSrc.length < 5) {
                document.getElementById("link-banner").innerHTML ="";
            }

        //legal blurb
            document.getElementById("legal").innerHTML = gen.form.legal;

        //colors
            var myTable = document.getElementById("table-wrapper");
            for (var i = 0; i < gen.companies.length; i++) {
                myTable.innerHTML = myTable.innerHTML.split(gen.companies[i].color).join(activeCompany.color);
            }

        //socials
            document.getElementById("img-icon1").setAttribute("src",activeSocialMediaCompany.twitterIcon);
            document.getElementById("link-icon1").setAttribute("href",activeSocialMediaCompany.twitterUrl);
            document.getElementById("img-icon2").setAttribute("src",activeSocialMediaCompany.linkedinIcon);
            document.getElementById("link-icon2").setAttribute("href",activeSocialMediaCompany.linkedinUrl);




    }

function clearForm() {
    var elements = document.querySelectorAll("#form input[type=text]");
    for (var i = 0; i<elements.length; i++) {
    elements[i].value = "";
    }
}

function onLoadScripts() {
    loadData();
    clearForm();
    //copyToPasteboard();
}

function copyToPasteboard() {
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    console.log(copyTextareaBtn);

    copyTextareaBtn.addEventListener('click', function(event) {
        var copyTextarea = document.querySelector('.js-copytextarea');
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });
}

function copyElementContents(el) {
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
    document.execCommand("Copy");
}

window.onload = onLoadScripts();