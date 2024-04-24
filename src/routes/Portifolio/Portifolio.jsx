import PortifolioItem from "../../component/Portifolio-item/Portifolio-item";
import "./Portifolio.css";
const Portifolio = () => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce",
      img: <img src="https://i.ibb.co/J2S8pbK/1.png" alt="1" border="0" />,
      link: "https://ecommerce-a5798.web.app/",
      details:[
        'FullStack application with the MERN stack',
        [
          "Application Feture:-",
          "This application can be used as a client or administrator ",
         [ "Client Side:-",
           "Add product to Wishlist .",
           "After Make Order Find it in list order .",
           "Add Review About Proudct ."
        ],
        [
          "Administrator Side:",
        "At DashBoard find data about Orders Daily, weekly, monthly .",
        "Add products and the ability to modify them .",
        "Follow up on orders and details about them .",
        "The ability to add an email as an administrator .",
        "Choose a product as the interface for the Application ."
        ]
      ],
      [  
      '- Using Function Components and Hooks.',
      '- Handling Routing using react-router-dom.',
      '- Handling State Management with context and Hooks.',
      '- Creating Custom Reusable React Components.',
      "- Using Stripe API to Handle Payement (test version)"
    ]
    ,[
    '-Called the Restful web services calls for POST, PUT, DELETE and GET methods.',
      '-Dealing with Authentication, Token and Authorization.',
      '-Applying Validation.',
      '-Adding Pagination for Fetching Experiences.',
  ]
  ]
    },
    {
      id: 2,
      title: "Share Places",
      img: <img src="https://i.ibb.co/YQLy3q9/3.png" alt="3" border="0" />,
      link: "https://share-places-aa9875.web.app/",
      details:[
        'FullStack application with the MERN stack',
      [  
      '- Using Function Components and Hooks.',
      '- Handling Routing using react-router-dom.',
      '- Handling State Management with context and Hooks.',
      '- Creating Custom Reusable React Components.',
      "- Using Stripe API to Handle Payement (test version)"
    ]
    ,[
      '-Called the Restful web services calls for POST, PUT, DELETE and GET methods.',
      '-Dealing with Authentication, Token and Authorization.',
      '-Applying Validation.',
      '-Adding Pagination for Fetching Experiences.',
  ]
  ]
    },
    {
      id: 3,
      title: "Crown Clothis",
      img: <img src="https://i.ibb.co/xg2hmS6/4.png" alt="4" border="0" />,
      link: "https://crown-clothes-a9875.web.app/",
      details:[
        'Frontend Application',
      [  
      '- Using Function Components and Hooks.',
      '- Handling Routing using react-router-dom.',
      '- Handling State Management with context and Hooks.',
      '- Creating Custom Reusable React Components.',
      "- Using Stripe API to Handle Payement (test version)"
    ]
  ]
    },
  ];
  return (
    <div className="portifolio-part">
      <h1>Portifolio</h1>  
      <div className="portifolio-content">
        {projects.map((item) => (
          <PortifolioItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Portifolio;
