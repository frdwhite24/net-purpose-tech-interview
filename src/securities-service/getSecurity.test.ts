import { getSecurity } from "./getSecurity";

const testData = [
  {
    Symbol: "AAPL",
    Name: "Apple Inc",
    Description:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store, that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.",
    Exchange: "NASDAQ",
    Currency: "USD",
    Country: "USA",
    Sector: "Technology",
  },
  {
    Symbol: "MSFT",
    Name: "Microsoft Corporation",
    Description:
      "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. Its Productivity and Business Processes segment offers Office, Exchange, SharePoint, Microsoft Teams, Office 365 Security and Compliance, and Skype for Business, as well as related Client Access Licenses (CAL); Skype, Outlook.com, OneDrive, and LinkedIn; and Dynamics 365, a set of cloud-based and on-premises business solutions for small and medium businesses, large organizations, and divisions of enterprises. Its Intelligent Cloud segment licenses SQL and Windows Servers, Visual Studio, System Center, and related CALs; GitHub that provides a collaboration platform and code hosting service for developers; and Azure, a cloud platform. It also offers support services and Microsoft consulting services to assist customers in developing, deploying, and managing Microsoft server and desktop solutions; and training and certification to developers and IT professionals on various Microsoft products. Its More Personal Computing segment provides Windows original equipment manufacturer (OEM) licensing and other non-volume licensing of the Windows operating system; Windows Commercial, such as volume licensing of the Windows operating system, Windows cloud services, and other Windows commercial offerings; patent licensing; Windows Internet of Things; and MSN advertising. It also offers Surface, PC accessories, PCs, tablets, gaming and entertainment consoles, and other devices; Gaming, including Xbox hardware, and Xbox content and services; video games and third-party video game royalties; and Search, including Bing and Microsoft advertising. It sells its products through OEMs, distributors, and resellers; and directly through digital marketplaces, online stores, and retail stores. It has a strategic collaboration with DXC Technology, Dynatrace, Inc., and Micro Focus; and a partnership with WPP plc. The company was founded in 1975 and is headquartered in Redmond, Washington.",
    Exchange: "NASDAQ",
    Currency: "USD",
    Country: "USA",
    Sector: "Technology",
  },
  {
    Symbol: "FB",
    Name: "Facebook, Inc",
    Description:
      "Facebook, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and in-home devices worldwide. The company's products include Facebook that enables people to connect, share, discover, and communicate with each other on mobile devices and personal computers; Instagram, a community for sharing photos, videos, and private messages; Messenger, a messaging application for people to connect with friends, family, groups, and businesses across platforms and devices; and WhatsApp, a messaging application that is used by people and businesses to communicate in a private way. It also provides Facebook Reality Labs, an augmented and virtual reality product that help people feel connected, anytime, and anywhere. Facebook, Inc. was founded in 2004 and is headquartered in Menlo Park, California.",
    Exchange: "NASDAQ",
    Currency: "USD",
    Country: "USA",
    Sector: "Communication Services",
  },
  {
    Symbol: "GOOGL",
    Name: "Alphabet Inc",
    Description:
      "Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.",
    Exchange: "NASDAQ",
    Currency: "USD",
    Country: "USA",
    Sector: "Communication Services",
  },
  {
    Symbol: "GOOG",
    Name: "Alphabet Inc",
    Description:
      "Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.",
    Exchange: "NASDAQ",
    Currency: "USD",
    Country: "USA",
    Sector: "Communication Services",
  },
  {
    Symbol: "BRKB",
    Name: "Berkshire Hathaway Inc",
    Description:
      "Berkshire Hathaway Inc., through its subsidiaries, engages in insurance, freight rail transportation, and utility businesses. It provides property, casualty, life, accident, and health insurance and reinsurance; and operates railroad systems in North America. The company also generates, transmits, stores, and distributes electricity from natural gas, coal, wind, solar, hydro, nuclear, and geothermal sources; operates natural gas distribution and storage facilities, interstate pipelines, and compressor and meter stations; and holds interest in coal mining assets. In addition, it offers real estate brokerage services; and leases transportation equipment and furniture. Further, the company manufactures boxed chocolates and other confectionery products; specialty chemicals, metal cutting tools, and components for aerospace and power generation applications; flooring, insulation, roofing and engineered, building and engineered components, paints and coatings, and bricks and masonry products, as well as offers homebuilding and manufactured housing finance; and recreational vehicles, apparel products, jewelry, and custom picture framing products, and alkaline batteries. Additionally, it manufactures castings, forgings, fasteners/fastener systems, and aerostructures; and seamless pipes, fittings, downhole casing and tubing, and various mill forms. The company distributes newspapers, televisions, and information; franchises and services quick service restaurants; distributes electronic components; and offers logistics services, grocery and foodservice distribution services, and professional aviation training and fractional aircraft ownership programs. It also retails automobiles; furniture, bedding, and accessories; household appliances, electronics, and computers; jewelry, watches, crystal, china, stemware, flatware, gifts, and collectibles; kitchenware; and motorcycle accessories. The company was incorporated in 1998 and is headquartered in Omaha, Nebraska.",
    Exchange: "NYSE",
    Currency: "USD",
    Country: "USA",
    Sector: "",
  },
];

describe("getting security", () => {
  const cases = [
    [
      "APL",
      testData,
      [
        {
          Symbol: "AAPL",
          Name: "Apple Inc",
          Description:
            "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store, that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.",
          Exchange: "NASDAQ",
          Currency: "USD",
          Country: "USA",
          Sector: "Technology",
        },
      ],
    ],
    [
      "GOO",
      testData,
      [
        {
          Symbol: "GOOGL",
          Name: "Alphabet Inc",
          Description:
            "Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.",
          Exchange: "NASDAQ",
          Currency: "USD",
          Country: "USA",
          Sector: "Communication Services",
        },
        {
          Symbol: "GOOG",
          Name: "Alphabet Inc",
          Description:
            "Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America. The company offers performance and brand advertising services. It operates through Google Services, Google Cloud, and Other Bets segments. The Google Services segment provides products and services, such as ads, Android, Chrome, hardware, Google Maps, Google Play, Search, and YouTube, as well as technical infrastructure; and digital content. The Google Cloud segment offers infrastructure and data analytics platforms, collaboration tools, and other services for enterprise customers. The Other Bets segment sells internet and TV services, as well as licensing and research and development services. The company was founded in 1998 and is headquartered in Mountain View, California.",
          Exchange: "NASDAQ",
          Currency: "USD",
          Country: "USA",
          Sector: "Communication Services",
        },
      ],
    ],
  ];
  test.each(cases)(
    "returns correct results",
    (searchTerm, data, expectedResult) => {
      const result = getSecurity(searchTerm, data);
      expect(result).toEqual(expectedResult);
    }
  );
});
