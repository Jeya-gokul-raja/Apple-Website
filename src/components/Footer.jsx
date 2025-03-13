import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Apple Wallet",
      links: ["Wallet"],
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    },
    {
      title: "Entertainment",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Group Reservation",
        "Apple Camp",
        "Apple Trade In",
        "Ways to Buy",
        "Recycling Program",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      links: [
        "Apple and Education",
        "Shop for Education",
        "Shop for University",
      ],
    },
    {
      title: "For Healthcare",
      links: [
        "Apple in Healthcare",
        "Mac in Healthcare",
        "Health on Apple Watch",
      ],
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Privacy",
        "Supply Chain",
      ],
    },
    {
      title: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ];
  return (
    <>
      <div className=" bg-gray-100   w-full sm:py-6 h-full sm:h-full p-1 sm:px-76  ">
        <div className="sm:text-sm text-sm  text-gray-500">
          <p>
            {" "}
            ◊No Cost EMI is available with the purchase of an eligible product
            made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month
            tenures from most leading card issuers. Eligible AirPods, HomePod
            and Beats products are available with No Cost EMI on 3- and 6-month
            tenures only. Monthly pricing is rounded to the nearest rupee. Exact
            pricing will be provided by your card issuer, subject to your card
            issuer’s terms and conditions. Minimum order spend applies as per
            your card issuer’s threshold. No Cost EMI is not available to
            Business customers and cannot be combined with Apple Store for
            Education or Corporate Employee Purchase Plan pricing. Card
            eligibility is subject to terms and conditions between you and your
            card issuer. Offer may be revised or withdrawn at any time without
            any prior notice.
            <span className="text-gray-800 underline">
              <a href="">Terms apply.</a>
            </span>
          </p>{" "}
          <p className="mt-2">Representative example:</p>
          <p className="mt-2">
            {" "}
            A purchase of ₹79900.00 repaid over 24 months with an interest rate
            of 15.99% p.a. and No Cost EMI savings of ₹11903.00 requires monthly
            payments of ₹3329.00. Total amount payable: ₹79900.00.{" "}
          </p>
          <p className="mt-2">
            ‡Instant cashback is available with the purchase of an{" "}
            <span className="text-gray-800 underline">
              <a href="">eligible product</a>
            </span>
            with qualifying American Express, Axis Bank and ICICI Bank cards
            only. Minimum transaction value of ₹10001.00 applies.{" "}
            <span className="text-gray-800 underline">
              {" "}
              <a href="">Click here to see</a>
            </span>
            instant cashback amounts and eligible devices. Instant cashback is
            available for up to two orders per rolling 90-day period with an
            eligible card. Card eligibility is subject to terms and conditions
            between you and your card issuer. Total transaction value is
            calculated after any trade-in credit or eligible discount is
            applied. Any subsequent order adjustment(s) or cancellation(s) may
            result in instant cashback being recalculated, and any refund may be
            adjusted to account for instant cashback clawback; this may result
            in no refund being made to you. Offer may be revised or withdrawn at
            any time without any prior notice.{" "}
            <span className="text-gray-800 underline">
              {" "}
              <a href="">Additional terms apply.</a>
            </span>{" "}
            Instant cashback is not available to Business customers and cannot
            be combined with Apple Store for Education or Corporate Employee
            Purchase Plan pricing. Multiple separate orders cannot be combined
            for instant cashback.
          </p>
          <p className="mt-2">
            1. Apple Intelligence is available in beta on all iPhone 16 models,
            iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
            Mac models with M1 and later, with Siri and device language set to
            English (Australia, Canada, Ireland, New Zealand, South Africa, UK
            or US), as part of an iOS 18, iPadOS 18 and macOS Sequoia software
            update. Additional features and Chinese (Simplified), English
            (India, Singapore), French, German, Italian, Japanese, Korean,
            Portuguese (Brazil) and Spanish language support will be available
            in early April, with more languages coming over the course of the
            year, including Vietnamese. Some features may not be available in
            all regions or languages.
          </p>{" "}
          <p className="mt-2">
            {" "}
            2. Available in two models: AirPods 4 and AirPods 4 with Active
            Noise Cancellation.{" "}
            <p className="mt-2">A subscription is required for Apple TV+.</p>
          </p>{" "}
          <p className="mt-2">
            {" "}
            Features are subject to change. Some features, applications and
            services may not be available in all regions or all languages.
          </p>
        </div>
        <hr className="border-t-1 w-full -ml-1 border-gray-300 m-8" />
        <div className="mt-8 sm:flex hidden gap-24 ">
          <ul className="">
            <h4 className="font-medium mb-2">Shop and Learn</h4>
            <li className="mb-2 hover:underline">
              <a href="">Store</a>
            </li>{" "}
            <li className=" mb-2 hover:underline">
              <a href="">Mac</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">iPad</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">iPhone</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">Watch</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">AirPods</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">TV & Home</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">AirTag</a>
            </li>{" "}
            <li className=" hover:underline mb-2">
              <a href="">Accessories</a>
            </li>{" "}
            <li className="hover:underline">
              <a href="">Gift Cards</a>
            </li>{" "}
            <h4 className="font-medium mt-8">Apple Wallet</h4>
            <li className="hover:underline mt-2">
              <a href="">Wallet</a>
            </li>
          </ul>
          <ul>
            <h4 className="font-medium mb-2">Account</h4>
            <li className="hover:underline">
              <a href="">Manage Your Apple Account</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Store Account</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">iCloud.com</a>
            </li>{" "}
            <h4 className="font-medium  mt-8">Entertainment</h4>
            <li className="hover:underline mt-2">
              <a href="">Apple One</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple TV+</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Music</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Arcade</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Podcasts</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Books</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">App Store</a>
            </li>{" "}
          </ul>{" "}
          <ul>
            <h4 className="font-medium mb-2">Apple Store</h4>
            <li className="hover:underline ">
              <a href="">Find a Store</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Genius Bar</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Today at Apple</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Group Reservation</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Camp</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple Trade In</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Ways to Buy</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Recycling Program</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Order Status</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Shopping Help</a>
            </li>{" "}
          </ul>{" "}
          <ul className="sm:text-base">
            <h4 className="font-medium mb-2">For Business</h4>
            <li className="hover:underline sm:text-base">
              <a href="">Apple and Business</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Shop for Business</a>
            </li>{" "}
            <h4 className="font-medium mt-8">Entertainment</h4>
            <li className="hover:underline mt-2">
              <a href="">Apple and Education</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Shop for Education</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Shop for University</a>
            </li>{" "}
            <h4 className="font-medium mt-8">For Healthcare</h4>
            <li className="hover:underline mt-2">
              <a href="">Apple in Healthcare</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Mac in Healthcare</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Health on Apple Watch</a>
            </li>{" "}
          </ul>{" "}
          <ul>
            <h4 className="font-medium mb-2">Apple Values</h4>
            <li className="hover:underline mb-2">
              <a href="">Accessibility</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">Education</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">Environment</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">Privacy</a>
            </li>{" "}
            <li className="hover:underline mb-2">
              <a href="">Supply Chain</a>
            </li>{" "}
            <h4 className="font-medium mt-8">About Apple</h4>
            <li className="hover:underline mt-2">
              <a href="">Newsroom</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Apple LeaderShip</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Career Opportunities</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Investors</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Ethics & Complicance</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Events</a>
            </li>{" "}
            <li className="hover:underline mt-2">
              <a href="">Contact Apple</a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 sm:hidden block p-4 text-sm">
          <div className="max-w-screen-md mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-300 py-2">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex justify-between items-center text-left font-medium text-gray-700"
                >
                  {section.title}
                  {openSections[section.title] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
                {openSections[section.title] && (
                  <ul className="mt-2 text-gray-600">
                    {section.links.map((link, i) => (
                      <li key={i} className="py-1 hover:underline">
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="text-gray-500 flex text-sm sm:text-base">
          <p className="sm:mt-12 p-2 ">
            More ways to shop:{" "}
            <a href="">
              <span className="text-blue-500 underline">
                Find an Apple Store{" "}
              </span>
            </a>
            or{" "}
            <a href="">
              <span className="text-blue-500 underline">other retailer</span>
            </a>{" "}
            near you. Or call{" "}
            <a href="">
              {" "}
              <span className="text-blue-500 underline">000809 0067 8044.</span>
            </a>
          </p>
        </div>
        <hr className="sm:border-t-1 w-full -ml-1 border-gray-50 sm:border-gray-300 m-3 sm:m-8" />
        <div className="sm:flex -mt-1 text-sm sm:text-base p-2 text-gray-500">
          <p>Copyright &#169; 2025 Apple Inc.All right reserved.&nbsp;</p>
          <p className="sm:ml-9">
            <a href="">Privacy Policy</a> &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
            <a href="">Terms of Use</a>&nbsp;&nbsp;|&nbsp;&nbsp;{" "}
            <a href="">Sales Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="">Legal</a>
            &nbsp;&nbsp;|&nbsp;&nbsp; <a href="">Site Map</a>
          </p>
          <h4 className="sm:ml-82 ml-2">India</h4>
        </div>
      </div>
    </>
  );
}
