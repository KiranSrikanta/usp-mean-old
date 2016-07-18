/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var CarouselItem = require('../api/CarouselItem/CarouselItem.model');
var navigation = require('../api/navigation/navigation.model');
var product = require('../api/product/product.model');
var userProfile = require('../api/userProfile/userProfile.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

userProfile.find({}).remove(function() {
  userProfile.create({
      "name" : "Kiran",
      "email" : "Kiran@emc.com",
      "ManagerialApprover1" : "mgr1@emc.com",
      "ManagerialApprover2" : "mgr2@emc.com",
      "FinancialApprover1" : "fna1@emc.com",
      "FinancialApprover2" : "fna2@emc.com",
      "CostCenter" : "1234"
  }, function() {
      console.log('finished populating users');
    }
  );
});

CarouselItem.find({}).remove(function() {
  CarouselItem.create({
      "Title" : "iPhone",
      "Image" : "/assets/images/DbImages/Carousel-2.jpg",
      "ProductUrl" : "Something"
  },{
      "Title" : "MacBook",
      "Image" : "/assets/images/DbImages/Carousel-1.jpg",
      "ProductUrl" : "Something"
  },{
      "Title" : "Cloud",
      "Image" : "/assets/images/DbImages/Carousel-3.jpg",
      "ProductUrl" : "Something"
  },{
      "Title" : "Sync",
      "Image" : "/assets/images/DbImages/Carousel-4.jpg",
      "ProductUrl" : "Something"
  }, function() {
      console.log('finished populating CarouselItems');
    }
  );
});

product.find({}).remove(function() {
  product.create({
      "_id" : "Apple MacBook Pro",
      "Name" : "Apple MacBook Pro",
      "Rating" : 5,
      "BillingFrequency" : "One Time",
      "Description" : "",
      "ETA" : 30,
      "ItemCategory" : [ 
          "laptops", 
          "apple"
      ],
      "Features" : [ 
          {
              "Title" : "Compact and powerful Mac laptop",
              "Description" : "The 13-inch and 15-inch MacBook Pros are a step up in size, and at 8 GB RAM and at least 500 GB storage, meet the needs of the most demanding content producers. The larger screens offer broader looks at the dynamic content, without surrendering the comfort of using it. The Pro is fully compatible with PC keyboards, mice & monitors. Covered by a 3 year AppleCare Protection Plan"
          }, 
          {
              "Title" : "Powerful & Compact",
              "Description" : "The 13\" MacBook Pro features a 2.5GHz Dual-Core processor with 500GB storage and at only 4.5lb, it travels well. The 15\" MacBook Pro features a 2.3GHz Quad-Core processor with 750GB storage & high-performance graphics. The MacBook Pro 15\" delivers serious power for heavy duty applications."
          }, 
          {
              "Title" : "Long-lasting Battery",
              "Description" : "The MacBook Pro delivers amazing battery life, with energy-efficient processor architecture and an integrated video encoder. You get up to 7 hours on a single charge and 30 days standby, meaning the MacBook Pro 13 works as hard as you do."
          }, 
          {
              "Title" : "Quick-starting",
              "Description" : "The MacBook Pro starts in seconds, giving you the confidence to work in the most demanding environments."
          }
      ],
      "Models" : [ 
          {
              "Title" : "Apple MacBook Pro 13\"",
              "NickName" : "Lightweight",
              "CPU" : "1.3GHz Intell Dual-Core i5",
              "Cost" : 6500,
              "Applications" : "Productivity",
              "Display" : "13.3-inch",
              "Image" : "/assets/images/DbImages/Model-MacBookAir13.png",
              "Graphics" : "Intel HD Graphics 5000",
              "ItemCategory" : [ 
                  "Laptops", 
                  "Apple"
              ],
              "MobilityProfile" : "Road Warrior",
              "OpticalDrive" : "None",
              "OS" : "Mac",
              "RAM" : "",
              "Storage" : "128GB SSD",
              "Weight" : "2.96lb",
              "Memory" : "8 GB"
          }, 
          {
              "Title" : "Apple MacBook Pro 11\"",
              "NickName" : "Lightweight",
              "CPU" : "1.3GHz Intell Dual-Core i5",
              "Cost" : 1550,
              "Applications" : "Productivity",
              "Display" : "13.3-inch",
              "Image" : "/assets/images/DbImages/Model-MacBookAir11.png",
              "Graphics" : "Intel HD Graphics 5000",
              "ItemCategory" : [ 
                  "Laptops", 
                  "Apple"
              ],
              "MobilityProfile" : "Road Warrior",
              "OpticalDrive" : "None",
              "OS" : "Mac",
              "RAM" : "",
              "Storage" : "128GB SSD",
              "Weight" : "2.96lb",
              "Memory" : "8 GB"
          }
      ],
      "Image" : "/assets/images/DbImages/Product-Image-MacBookPro13.png",
      "PublishingImage" : "/assets/images/DbImages/Product-Rollup-MacBookPro13.png",
      "RollupImage" : "/assets/images/DbImages/Product-Rollup-MacBookPro13.png",
      "Featured" : true,
      "FeaturedCategory" : "DESKTOPS & LAPTOPS",
      "FeaturedItemImage" : "/assets/images/DbImages/Featured-u105.png",
      "TopProduct" : true,
      "Cost" : 999
  }, {
      "_id" : "Lenovo Think Book 15",
      "Name" : "Lenovo Think Book 15",
      "Rating" : 4,
      "BillingFrequency" : "One Time",
      "Description" : "The Lenovo ThinkPad is the most popular PC at EMC, and with three different options, users have choices that suit their mobile needs with enough power to meet their everyday demands. Covered by 3 year Lenovo global onsite warranty.",
      "ETA" : 25,
      "ItemCategory" : [ 
          "laptops", 
          "lenovo"
      ],
      "Features" : [],
      "Models" : [],
      "Image" : "/assets/images/DbImages/Product-Image-LenovoThinkBook15.png",
      "PublishingImage" : "/assets/images/DbImages/Product-Rollup-LenovoThinkBook15.png",
      "RollupImage" : "/assets/images/DbImages/Product-Rollup-LenovoThinkBook15.png",
      "Featured" : false,
      "TopProduct" : false,
      "Cost" : 1830
  }, function() {
      console.log('finished populating products');
    }
  );
});

navigation.find({}).remove(function() {
  navigation.create({
      "Title" : "Desktop & Laptop",
      "Featured" : {
          "Title" : "MacBook Pro 13\"",
          "Image" : "/assets/images/DbImages/Featured-u105.png",
          "Rating" : "4",
          "ID" : "2"
      },
      "SubMenu" : [ 
          {
              "Title" : "Desktops",
              "NavLinks" : [ 
                  {
                      "Title" : "All",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Dell",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Lenovo",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Used",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Virtual",
                      "URL" : "Something"
                  }
              ]
          }, 
          {
              "Title" : "Laptops",
              "NavLinks" : [ 
                  {
                      "Title" : "All",
                      "URL" : "/ProductCatalog/laptops/all"
                  }, 
                  {
                      "Title" : "Apple",
                      "URL" : "/ProductCatalog/laptops/apple"
                  }, 
                  {
                      "Title" : "Lenovo",
                      "URL" : "/ProductCatalog/laptops/lenovo"
                  }, 
                  {
                      "Title" : "Used",
                      "URL" : "/ProductCatalog/laptops/used"
                  }
              ]
          }, 
          {
              "Title" : "Accessories",
              "NavLinks" : [ 
                  {
                      "Title" : "All",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Cables and Connectors",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Carrying Cases",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Docking Stations",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Keyboards",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Laptop Batteries",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Memory",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Mice",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Monitor",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Power Supplies",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Storage",
                      "URL" : "Something"
                  }
              ]
          }
      ]
  },{
      "Title" : "Mobile",
      "Featured" : {
          "Title" : "iPhone 5s",
          "Image" : "/assets/images/DbImages/Featured-u191.png",
          "Rating" : "3",
          "ID" : "5"
      },
      "SubMenu" : [ 
          {
              "Title" : "Phones",
              "NavLinks" : [ 
                  {
                      "Title" : "All",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Android",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Apple",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Windows",
                      "URL" : "Something"
                  }
              ]
          }, 
          {
              "Title" : "Accessories",
              "NavLinks" : [ 
                  {
                      "Title" : "All",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Cables",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Cases",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Keyboards",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Screen Protectors",
                      "URL" : "Something"
                  }
              ]
          }, 
          {
              "Title" : "Mobile Apps",
              "NavLinks" : [ 
                  {
                      "Title" : "App Hosting",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "App Development",
                      "URL" : "Something"
                  }
              ]
          }, 
          {
              "Title" : "Tablets",
              "NavLinks" : [ 
                  {
                      "Title" : "All",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Android",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Apple",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Windows",
                      "URL" : "Something"
                  }
              ]
          }
      ]
  },{
      "Title" : "Communication & Collaboration",
      "Featured" : {
          "Title" : "Sync and Share",
          "Image" : "/assets/images/DbImages/Featured-u281.png",
          "Rating" : "5",
          "ID" : "8"
      },
      "SubMenu" : [ 
          {
              "Title" : "Communication",
              "NavLinks" : [ 
                  {
                      "Title" : "Conference Room Mailbox",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Distribution List",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Email & Calendar",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Group Mailbox",
                      "URL" : "Something"
                  }
              ]
          }, 
          {
              "Title" : "Conferencing",
              "NavLinks" : [ 
                  {
                      "Title" : "Automated Event Call",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Desktop Video",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Operator Assisted",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Reservationless Audio",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Telepresence",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Video Conferencing",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Web Conferencing",
                      "URL" : "Something"
                  }
              ]
          }, 
          {
              "Title" : "Collaboration",
              "NavLinks" : [ 
                  {
                      "Title" : "SharePoint",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Syncplicity Sync & Share",
                      "URL" : "Something"
                  }
              ]
          }
      ]
  },{
      "Title" : "Cloud Services",
      "Featured" : {
          "Title" : "Cloud Storage",
          "Image" : "/assets/images/DbImages/Featured-u349.png",
          "Rating" : "2",
          "ID" : "9"
      },
      "SubMenu" : [ 
          {
              "Title" : "Computing",
              "NavLinks" : [ 
                  {
                      "Title" : "Cloud Core Lab Infratructure",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Cloud Storage (ViPR)",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "ECM as a Service",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Platform as a Service",
                      "URL" : "Something"
                  }, 
                  {
                      "Title" : "Virtual Server",
                      "URL" : "#/ProductVirtualServer/Virtual Windows Server"
                  }, 
                  {
                      "Title" : "Xpress Database",
                      "URL" : "Something"
                  }
              ]
          }
      ]
  }, function() {
      console.log('finished populating navigation items');
    }
  );
});