//  Begin Scraper Data.
const AI_TITLES = ["AI VP", "AI Data", "AI Engineer", "AI Developer", "AI Programmer", "AI Scientist", "AI Investor", "AI Manger", "AI Senior", "AI Lead", 
    "AI Head", "AI Chief","CEO OR CTO OR CIO OR COO"];

const OLD_TITLES = ['VP of Applied AI', 'AI Project Lead', 'AI Project Manager', 'AI Project Director','AI Data Scientist','AI Software Engineer','AI Software Developer', 'AI Technology Investor'];
    
const NEW_AI_LIST = ["VP of Artificial Itelligence", "AI Project Manager", "AI Product Manager", "AI Director", "AI Team Lead", "AI Data Scientist", "AI Data Analyst", "NLP", 
    "Machine Learning", "AI Developer", "AI Researcher", "Deep Learning", "AI Engineer", "AI Investor", "AI Product Owner", "AI Analytics", "AI Architect", "AI CTO", 
    "AI CEO" , "AI Research Scientist"];

const JOB_GROUPS = ['("developer" OR "programmer" OR "engineer")', '("data analyst" OR "data scientist or "data engineer")', '("principal engineer" or "principal architect" or "researcher" OR "research scientist")', 
    '("project manager" OR "product manager")', '("ceo" OR "cto" OR "cio" OR "vp" OR "vice president")'];

const LARGEST_US_CITIES = ['New York City','Los Angeles','Chicago','Houston','Phoenix','San Antonio','Philadelphia','San Diego','Dallas','Austin',
    'San Jose','Fort Worth','Jacksonville','Charlotte','Columbus','Indianapolis','San Francisco','Seattle','Denver','Washington',
    'Boston','El Paso','Nashville','Oklahoma City','Las Vegas','Portland','Detroit','Memphis','Louisville','Milwaukee',
    'Baltimore','Albuquerque','Tucson','Mesa','Fresno','Atlanta','Sacramento','Kansas City','Colorado Springs','Raleigh',
    'Miami','Omaha','Long Beach','Virginia Beach','Oakland','Minneapolis','Tampa','Tulsa','Arlington','Aurora',
    'Wichita','Bakersfield','New Orleans','Cleveland','Henderson','Anaheim','Honolulu','Riverside','Santa Ana','Corpus Christi',
    'Lexington','San Juan','Stockton','St. Paul','Cincinnati','Irvine','Greensboro','Pittsburgh','Lincoln',
    'Durham','Orlando','St. Louis','Chula Vista','Plano','Newark','Anchorage','Fort Wayne','Chandler','Reno',
    'North Las Vegas','Scottsdale','St. Petersburg','Laredo','Gilbert','Toledo','Lubbock','Madison','Glendale','Jersey City',
    'Buffalo','Chesapeake','Winston-Salem','Fremont','Norfolk','Frisco','Paradise','Irving','Garland','Richmond',
    'Arlington','Boise','Spokane','Hialeah','Moreno Valley','Tacoma','Port St. Lucie','McKinney','Fontana','Modesto',
    'Fayetteville','Baton Rouge','San Bernardino','Santa Clarita','Cape Coral','Des Moines','Tempe','Huntsville','Oxnard','Spring Valley',
    'Birmingham','Rochester','Overland Park','Grand Rapids','Yonkers','Salt Lake City','Columbus','Augusta','Amarillo','Tallahassee',
    'Ontario','Montgomery','Little Rock','Akron','Huntington Beach','Grand Prairie','Glendale','Sioux Falls','Sunrise Manor','Aurora',
    'Vancouver','Knoxville','Peoria','Mobile','Chattanooga','Worcester','Brownsville','Fort Lauderdale','Newport News','Elk Grove',
    'Providence','Shreveport','Salem','Pembroke Pines','Eugene','Rancho Cucamonga','Cary','Santa Rosa','Fort Collins','Oceanside',
    'Corona','Enterprise','Garden Grove','Springfield','Clarksville','Murfreesboro','Lakewood','Bayamon','Killeen','Alexandria',
    'Midland','Hayward','Hollywood','Salinas','Lancaster','Macon','Surprise','Sunnyvale','Palmdale',
    'Bellevue','Springfield','Denton','Jackson','Escondido','Pomona','Naperville','Roseville','Thornton','Round Rock',
    'Pasadena','Joliet','Carrollton','McAllen','Paterson','Rockford','Waco','Bridgeport','Miramar','Olathe','Metairie'];

const LARGEST_LATAM_CITIES = ['São Paulo','Mexico City','Lima','Bogotá','Rio de Janeiro','Santiago','Caracas','Buenos Aires','Salvador',
    'Brasília','Fortaleza','Guayaquil','Quito','Belo Horizonte','Medellín','Cali','Havana','Manaus','Curitiba',
    'Ecatepec de Morelos','Maracaibo','Recife','Santa Cruz de la Sierra','Porto Alegre','Guadalajara','Belém','Puebla','Goiânia','Córdoba',
    'Juárez','Montevideo','León','Guarulhos','Tijuana','Barranquilla','Tegucigalpa','Zapopan','Campinas','Barquisimeto',
    'Monterrey','São Luís','Managua','Nezahualcóyotl','São Gonçalo','Maceió','Callao','Santo Domingo','Guatemala City','Port-au-Prince','Rosario'];

const LATAM_TECH_HUBS = ["Monterrey","Mexico City","San Juan","Caracas","Guatemala City","Medellin","Bogotá", "Manaus", "Recife", "Lima",
    "Belo Horizonte", "Rio de Janeiro", "Campinas","São Paulo", "Curitiba", "Santiago", "Buenos Aires"];

const EUROPEAN_TECH_HUBS = ["London", "Berlin", "Paris", "Amsterdam", "Barcelona", "Munich", "Madrid", "Stockholm", "Dublin", "Milan", 
    "Copenhagen", "Tallinn", "Zurich", "Helsinki", "Hamburg", "Athens", "Belfast", "Budapest", "Cambridge", "Edinburgh" , "Ghent",
    "Glasgow", "Kraków", "Limerick", "Lisbon", "Montpellier", "Oslo", "Porto", "Prague", "Riga", "Toulouse", "Vienna", "Vilnius",
    "Warsaw", "Zug"]

const US_TECH_HUBS = ["New York City", "Dallas", "Houston", "Colorado Springs", "Las Vegas", "Tulsa", "Atlanta", "Tampa", "Louisville", "Arlington",
    "Denver", "Los Angeles", "Austin", "Washington D.C.", "Minneapolis", "Nashville", "Kansas City", "Indianapolis", "Baltimore", "Chicago",
    "San Diego", "Columbus", "Boston", "Milwaukee", "Jacksonville", "San Francisco", "El Paso", "Oklahoma City", "San Jose", "Philadelphia",
    "Raleigh", "Memphis", "San Antonio", "Miami", "Tucson", "Albuquerque", "Phoenix", "Charlotte", "Detroit", "Fort Worth",
    "Omaha", "Seattle", "Mesa", "Virginia Beach", "Long Beach", "Sacramento", "Portland", "Fresno", "New Orleans", "Oakland"];

const LARGEST_EUROPEAN_CITIES = ["Istanbul","Moscow","London","Saint Petersburg","Berlin","Madrid","Kyiv","Rome","Bucharest","Paris","Minsk","Vienna","Hamburg",
    "Warsaw","Budapest","Belgrade","Barcelona","Munich","Kharkiv","Milan","Sofia","Prague","Kazan","Nizhny Novgorod","Samara","Birmingham","Rostov-on-Don","Ufa",
    "Cologne","Voronezh","Perm","Volgograd"];

const LARGEST_ASIAN_CITIEST = ["Shanghai","Karachi","Beijing","Mumbai","Delhi","Istanbul","Dhaka","Tokyo","Manila","Guangzhou","Shenzhen","Bangkok","Suzhou",
    "Jakarta","Lahore","Seoul","Ho Chi Minh City","Bengaluru","Dongguan","Chongqing","Nanjing","Tehran","Shenyang","Hanoi","Hong Kong","Baghdad","Chennai",
    "Changsha","Wuhan","Tianjin","Hyderabad","Faisalabad","Foshan","Zunyi","Chittagong","Riyadh","Ahmedabad","Singapore","Shantou","Ankara","Yangon","Chengdu",
    "Kolkata","Xi'an","Surat","Vadodara","Izmir","Zhengzhou","New Taipei City","Yokohama","Hangzhou","Xiamen","Quanzhou","Busan","Rawalpindi","Jeddah","Hyderabad",
    "Kabul","Hefei","Pyongyang","Peshawar","Zhongshan","Pune","Jaipur","Lucknow","Wenzhou","Incheon","Quezon City","Taichung","Kaohsiung","Surabaya","Taipei",
    "Osaka","Dubai","Bandung","Daegu","Nagpur","Nagoya","Baku","Phnom Penh","Kochi","Taoyuan","Medan","Sapporo","Tainan","Almaty","Kuala Lumpur","Davao City",
    "Novosibirsk","Caloocan","Kobe","Yekaterinburg","Khulna","Fukuoka","Kyoto","Kawasaki","Omsk","Ranchi","Chelyabinsk","Krasnoyarsk","Tbilisi","Yerevan",
    "Nur-Sultan","Shymkent"];
    
const LARGEST_AUSTRALIAN_CITIES = ["Sydney","Melbourne","Brisbane","Perth","Adelaide","Canberra","Hobart","Darwin"];

const INDUSTRIES = ['software','automotive', 'biotechnology','ecommerce', 'healthcare','agriculture'];
//  End scraper data.


let agentList = ["Windows 10/ Edge browser: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"   ,
                "Windows 7/ Chrome browser: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36",
                "Linux PC/Firefox browser: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1",
                "Chrome OS/Chrome browser: Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19577",
                "Mozilla/5.0 (X11) AppleWebKit/62.41 (KHTML, like Gecko) Edge/17.10859 Safari/452.6",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931",
                "Chrome (AppleWebKit/537.1; Chrome50.0; Windows NT 6.3) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
                "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2919.83 Safari/537.36",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2866.71 Safari/537.36",
                "Mozilla/5.0 (X11; Ubuntu; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2820.59 Safari/537.36",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2762.73 Safari/537.36",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2656.18 Safari/537.36",
                "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/44.0.2403.155 Safari/537.36",
                "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36",
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
                "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:101.0) Gecko/20100101 Firefox/101.0",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0",
                "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:77.0) Gecko/20190101 Firefox/77.0"];


const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');

//prepare search
//prepare Headers
//make requesest => process results in the callback => write the file => prepare the next search


var proxyList = [];
var proxyIndex = 0;
var titles = OLD_TITLES;
var industries = INDUSTRIES;
var locales = EUROPEAN_TECH_HUBS;
var titleIndex = 0;
var industryIndex = 0;
var localeIndex = 0;

titles = JOB_GROUPS;
locales = LARGEST_US_CITIES.concat(LARGEST_LATAM_CITIES,LARGEST_EUROPEAN_CITIES,LARGEST_ASIAN_CITIEST,LARGEST_AUSTRALIAN_CITIES);
locales = locales.splice(2*(locales.length/5) - (locales.length/5), (locales.length/5))

//handle any command line arguments.
const args = process.argv;
if(args.length == 2)
{
    //no args
    //console.log ("Usage:  node FindContacts.js company name");
}
else if (args.length == 5)
{
    //array location entered.
    titleIndex = parseInt(args[2]);
    industryIndex = parseInt(args[3]);
    localeIndex = parseInt(args[4]);
} 
else
{
    // some other case.
    console.log("Usage: ");
    console.log("node scraper.js - this starts a new search.");
    console.log(" - OR - ");
    console.log("node scraper.js - t i l ")
    console.log("  where t = 0 to " + AI_TITLES.length-1);
    console.log("  and i = 0 to " + INDUSTRIES.length-1);
    console.log("  and l = 0 to " + locales.length-1);
}

loadProxies();

createRequestOptions(1,true);

/** returns the URL of the next google search to scrape, based on available data.  If retry is true, it will return the last search performed. */
function getNextSearchURL (pageNumber = 1, retry = false) {
    //console.warn(`getNextSearchURL(${pageNumber},${retry})`);
    

    if((pageNumber == 1) && (retry == false) )
    {
        localeIndex += 1;

        if (localeIndex > (locales.length -1))
        {
            localeIndex = 0;
            titleIndex += 1;

            if(titleIndex > (titles.length -1))
            {
                //console.log(titleIndex, titles.length);
                return "eof"
            }
        }
    }

    //console.log(`getNextSearchURL:, titles:${titles.length}/${titleIndex}, industries:${industries.length}/${industryIndex}, locales:${locales.length}/${localeIndex}`);

    let title = googlifyString(titles[titleIndex]);
    let locale = googlifyString(locales[localeIndex]);

    let baseURL = "http://www.google.com/search?q=";
    let query = `site:reddit.com ("artificial intelligence" OR "ai" OR "machine learning" OR "ml" OR "computer vision" OR "deep learning" OR "nlp" OR "natural language processing") AND "${locale}" AND ${title} AND "email" AND ("@gmail.com" OR "@yahoo.com" OR "@hotmail.com")`;
    query = googlifyString(query);

    baseURL += query + "&num=100";

    if(pageNumber > 1) {
        baseURL += "&start=" + (pageNumber-1)*100
    }

    //console.log(`getNextSearchURL: pageNumber=${pageNumber}    retry=${retry}`);
    //console.log(`${baseURL}`);
    return baseURL
}

/**returns next "proxyhost:port" from list
* ex: proxy6.infatica.com:2309 */
function getNextProxy()
{
    let retval = proxyList[proxyIndex];
    proxyList += 1;
    return retval;
}

/**returns random "proxyhost:port" from list as a string
* ex: proxy6.infatica.com:2309 */
function getRandomProxy()
{
    let rindex = Math.floor(Math.random()*proxyList.length);
    let retval = proxyList[rindex].toString();
    return retval;
}

var pagenum = 1;
var retry = false;
function createRequestOptions(lastpage = true, ghostretry = false) {
    
    //console.log(`createRequestOptions: lastpage=${lastpage}    pagenum=${pagenum}    retry=${retry}`);

    let url;
    if(ghostretry) url = getNextSearchURL(pagenum,ghostretry) 
    else url = getNextSearchURL(pagenum,retry)
    
    if (lastpage)  pagenum = 1
    else pagenum++

    

    if(url == "eof"){
        console.log('Search Completed.')
        return;
    }

    let options = {}
    let proxy = getRandomProxy().split(':');
    options.host = proxy[0];
    options.port = parseInt(proxy[1]);
    options.path = url
    options.headers = {};
    options.headers.Host = "www.google.com";
    options.headers.Agent = getRandomAgent();

    //console.log(options);
    
    makeRequest(options);
}

/**returns a random user agent from a list as a string. */
function getRandomAgent() {
    let rindex = Math.floor(Math.random()*agentList.length)
    let retval = agentList[rindex]
    return retval;
}

/** Executes a search and sends the html to onRequestComplete() */
function makeRequest(options) {
    //console.warn("makeRequest:", options);
    
    const request = http.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });
    
        response.on('end', () => {
            //const body = JSON.parse(data);
            //console.log(body);
            //do your thing here when the response is complete.
            //console.warn("RESPONSE COMPLETE")
            onRequestComplete(data);
        });

        response.on('error', (error) => {
            console.error('RESPONSE ERROR:',error);
            retryRequest();
        })
    })
    
    request.on('error', (error) => {
        console.error('REQUEST ERROR:', error);
        retryRequest();

    });
    
    request.end() 
}

function onRequestComplete(data)
{
    //console.log("From external callback:");
    //console.log(data);

    if(data.indexOf('<title>400 Bad Request</title>') >= 0)
    {
        console.error(" -- BAD REQUEST --")
        retryRequest();
        return;
    }

    const $ = cheerio.load(data);

    let scrapedLeads = [];
    let searchitems = $(".Gx5Zad.fP1Qef.xpd.EtOod.pkphOe")
    for(let i=0; i < searchitems.length; i++)
    {
        //console.log("results");
        let element = searchitems[i];
        let link = $(element).find(".egMi0").find("a").attr('href');
        link = link.substring(link.indexOf('=')+1,link.indexOf('&'));
        let headline = $(element).find(".egMi0").find("h3").text();
        let details = ""
        let stub = $(element).find(".BNeawe.s3v9rd.AP7Wnd > div > div > div").text();

        let newDataObject = createDataObject(link,headline,details,stub);
        scrapedLeads.push(newDataObject);
    }

    
    
    let footerbutton = $(".nBDE1b.G5eFlf");
    let buttontext = footerbutton.text().trim();

    let arrow = (buttontext.substring(buttontext.length -1));
    let lastpage = true;
    switch(arrow)
    {
        case ">":
            lastpage = false;
            break;
        
        case "<":
            lastpage = true;
            break;
        
        default:
            lastpage = true;
            break;
            //console.log("no button here... new search.")
    }

    //console.log(`onRequestComplete: arrow=${arrow}   lastepage=${lastpage}`);
    writeLeads(scrapedLeads,lastpage);
}

/** stores scraped data from the last search in an object array called scrapedLeads */
function createDataObject(link,headline,details,stub)
{
    // capture this data....
    //let headline = item;
    //let LILink = link;
    let location = "";
    let title = "";
    let company = "";

    // the details here contain the company, position, and location
    // information for each linkedin search result (for a person).
    //const details = $(searchItem).find(".MUxGbd.wuQ4Ob.WZ8Tjf").find("span");

    // I'm extracting the data I need from the details here.
    // This is ugly, but it looks ugly in the markup,
    // so don't judge me.
    for(let j = 0; j < details.length; j++)
    {
        const detailItem = details;

        switch(j)
        {
            case 0:
                location = detailItem;
                break;
            case 4:
                company = detailItem;
                break;
            case 2:
                title = detailItem;
                break;
        }
    }

    // The stub is the little preview of text you get with each search result.
    //const stub = $(searchItem).find(".VwiC3b.yXK7lf.MUxGbd.yDYNvb.lyLwlc.lEBKkf").find("span").text();

    // these are regular expressions to match email addresses and phone numbers.
    // the phone number regex could be better, I think, but it's getting the job done.
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const phoneRegex = /(\+*\d{1,})*([ |\(])*(\d{3})[^\d]*(\d{3})[^\d]*(\d{4})/

    // Here, we get our phone and email data.
    const email = stub.match(emailRegex);
    const phone = stub.match(phoneRegex);

    if(email)
    {
        // If there is no email, then we have nothing, and this iteration ends,
        // and we move to the next searchitem.

        // otherwise....
        let newlead = {};  // create an object to hold our data.
        newlead.headline = headline;
        newlead.link = link;
        newlead.location = location;
        newlead.title = title;
        newlead.company = company;
        newlead.email = email[0].trim();
        newlead.phone = phone == null ? '' : phone[0]  // if we found a phone number, put it in, otherwise, an empty string.

        return(newlead)
    }
}

/** Writes scraped data to file.  If lastpage is false, the same search will continue. */
function writeLeads(scrapedLeads, lastpage = true){
    //let filename = `output - ${titles[tidx]} - ${industries[iidx]} - ${locales[lidx]}.csv`;
    
    let leadcount = 0;
    let leadsToWrite = [];

    //console.log("writing leads.....");
    //console.log("there are " + scrapedLeads.length + "!");
    for(let i = 0; i < scrapedLeads.length; i++)
    {
        let lead = scrapedLeads[i];
        let headline = lead.headline;
        headline = headline.replace(" | LinkedIn","");
        headline = headline.replace(" - LinkedIn","");
        let fdi = headline.indexOf(" - ");
        let ldi = headline.lastIndexOf(" - ");

        if(ldi == fdi) { ldi = -1; }

        // this is our best-case scenario, where ldi is greater than fdi, that means we have two dashes
        // and we will assume that the second bit of information is the title.
        // and the last bit of information is the company (and we may still be wrong)
        if ((fdi >= 0) && (ldi >= 0))
        {
            lead.name = headline.substring(0,fdi);

            lead.title == "" ? lead.title = headline.substring(fdi+3,ldi ) : false
            
            lead.company == "" ? lead.company = headline.substring(ldi+3, headline.length) : false;
        }

        // so now, if there's only one dash, we don't know whether the second piece of information is a company or a position....
        if((fdi>=0) && (ldi<0))
        {
            lead.name = headline.substring(0,fdi);

            let t = headline.substring(fdi+3,headline.length);
            if(lead.title == "") {
                //so if the lead doesn't have a title, we are going to use this second piece of information for a title...
                lead.title = t;} 
            else { 
                //and if there's no company, we'll use it for a company. 
                if((lead.company == "") || (lead.company == "LinkedIn")) {
                    lead.company = t;
                }}
        }

        //It's not impossible for this data to be duplicatedin both fields, but the important thing was the email, right?  Moving on....

        //these conditions indicate that this is not a good result
        //for our purposes. They are not "people" results.

        if(lead.name == undefined) { continue };
        if(lead.name.endsWith("'s Post")) { continue };
        if(lead.name.startsWith("Articles ")) { continue };
        if(lead.name.startsWith("Posts ")) { continue };
        if(lead.name.startsWith("Publicações ")) { continue };
        if(lead.link.includes("/posts/")) { continue };
        if(lead.link.includes("/pub/dir/")) { continue };
        if(lead.link.includes("/directory/")) { continue };

        leadsToWrite.push(lead);
        
    }

    if(leadsToWrite.length > 0)
    {
        let outputfile = `output - ${locales[localeIndex]}.csv`
        let output = fs.createWriteStream(outputfile,{flags:'a'});
        for(let i = 0; i < leadsToWrite.length; i++)
        {
            let lead = leadsToWrite[i];
            output.write(`"${lead.name}","${lead.title}","${lead.company}","${lead.email}","${lead.location}","${lead.phone}","${lead.link}"\n`);
        }
        output.close();
        console.log("\r\n   " + leadsToWrite.length + ` records written to ${outputfile} ${titleIndex},${industryIndex},${localeIndex}` );
    } 

    //console.log(`writeLeads(lastpage = true):  lastpage=${lastpage}`);
    createRequestOptions(lastpage);    
}

/** attempt the last request again with a different proxy. */
function retryRequest() {
    createRequestOptions(false,true);
}




//***** Utility *****//


/** returns 'targetString' with all instances of 'symbol' replaced with 'newsymbol'. */
function replaceAll(targetString,symbol,newsymbol)
{
    targetString = targetString.trim();
    while(targetString.indexOf(symbol) > -1)
    {
        targetString = targetString.replace(symbol,newsymbol);
    }

    return targetString;
}

/** Read the proxies into an array.
 * filename is a text file that contains rows of data like "prox5.proxyhost.net:12345", one per line. */
function loadProxies(filename = "proxylist.txt") {
    try {
        // read contents of the file
        proxyList = fs.readFileSync("proxylist.txt").toString().split(/\r\n/);
        }
    catch (err) {
        console.error(err);
        }
    console.log(proxyList.length + " proxies loaded.");
}

/** replaces spaces and special characters with search-friendly symbols */
function googlifyString(aQueryOrPartialQuery)
{
    retval = aQueryOrPartialQuery;
    retval = replaceAll(retval," ","+");
    retval = replaceAll(retval,"(","%28");
    retval = replaceAll(retval,")","%29");
    retval = replaceAll(retval,"@","%40");
    retval = replaceAll(retval,'"',"%22");
    retval = replaceAll(retval,":","%3A");
    retval = replaceAll(retval,"/","%2F");

    return retval;

}

/** returns a new array with duplicates removed. */
function nodupes(yourArray) {
    retval = [];
    for(let i=0;i<yourArray.length;i++) {
        let member = yourArray[i].toLowerCase();
        let memberIndex = retval.indexOf(member);
        if(memberIndex == -1) retval.push(member);
    }
    return retval;
}