import Card from "./components/Card"
import User from "./components/User";

const App = () => {

  const jobs = [
    {
      id: 1,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FcV0y3yOHmd2puP9TTthTGJHH0k5VMvUO9Ay4lZYcRBVeQEd_rSxqo8&s=10",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      salary: "$45/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$70/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 3,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSOvWWDB-ZdxmchUoa6-wbCN01WeLyz76Ei7vffIYlg&s",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      salary: "$60/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 4,
      brandLogo: "https://logos-world.net/wp-content/uploads/2021/11/Meta-Symbol.png",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "UI Developer",
      tag1: "Part-time",
      tag2: "Junior Level",
      salary: "$40/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 5,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwpap5kCE5plP4ysJ21Uo7CWrtIOuiP45Ab8X5MeB3NqAwyIHgo9pwdw&s=10",
      companyName: "Apple",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$80/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 6,
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdObI7M5B1dx10a9L7d6gtP8iCnAC46psiKlpIggtYtHNBJuk063DSCW0&s=10",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "React UI Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      salary: "$75/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 7,
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/330px-Adobe_Acrobat_DC_logo_2020.svg.png",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "Web Developer",
      tag1: "Part-time",
      tag2: "Junior Level",
      salary: "$35/hr",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 8,
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/054/650/807/small_2x/nvidia-logo-rounded-nvidia-logo-free-png.png",
      companyName: "NVIDIA",
      datePosted: "2 days ago",
      post: "Software Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      salary: "$90/hr",
      location: "Dhaka, Bangladesh",
    },
  ];

  const users = [
  {
    id: 1,
    profilePicture: "https://i.pravatar.cc/300?img=47",
    username: "Chloe Harrison",
    designation: "Product Designer",
    tag1: "UI/UX Designer",
    tag2: "Figma",
    rating: 4.5,
    earned: "$15K+",
    rate: "$80/hr",
  },
  {
    id: 2,
    profilePicture: "https://i.pravatar.cc/300?img=12",
    username: "Daniel Carter",
    designation: "Full Stack Developer",
    tag1: "Full Stack",
    tag2: "Django",
    rating: 4.8,
    earned: "$32K+",
    rate: "$90/hr",
  },
  {
    id: 3,
    profilePicture: "https://i.pravatar.cc/300?img=32",
    username: "Sophia Miller",
    designation: "Frontend Engineer",
    tag1: "React.js",
    tag2: "Frontend Engineer",
    rating: 4.9,
    earned: "$45K+",
    rate: "$110/hr",
  },
  {
    id: 4,
    profilePicture: "https://i.pravatar.cc/300?img=11",
    username: "Ethan Wilson",
    designation: "Backend Developer",
    tag1: "Backend",
    tag2: "Node.js",
    rating: 4.6,
    earned: "$28K+",
    rate: "$85/hr",
  },
  {
    id: 5,
    profilePicture: "https://i.pravatar.cc/300?img=45",
    username: "Emma Anderson",
    designation: "Software Engineer",
    tag1: "Full Stack",
    tag2: "MERN Stack",
    rating: 4.7,
    earned: "$52K+",
    rate: "$120/hr",
  },
  {
    id: 6,
    profilePicture: "https://i.pravatar.cc/300?img=15",
    username: "James Taylor",
    designation: "DevOps Engineer",
    tag1: "DevOps",
    tag2: "AWS",
    rating: 4.8,
    earned: "$60K+",
    rate: "$130/hr",
  },
  {
    id: 7,
    profilePicture: "https://i.pravatar.cc/300?img=44",
    username: "Olivia Martin",
    designation: "Mobile App Developer",
    tag1: "Mobile Developer",
    tag2: "React Native",
    rating: 4.6,
    earned: "$38K+",
    rate: "$95/hr",
  },
  {
    id: 8,
    profilePicture: "https://i.pravatar.cc/300?img=13",
    username: "Noah Thompson",
    designation: "AI Engineer",
    tag1: "Machine Learning",
    tag2: "Python",
    rating: 4.9,
    earned: "$75K+",
    rate: "$150/hr",
  },
];

  return (
    <>
      <h1 className="title">This is a Card Section</h1>
      <div className="card-parent">
        {/* Object Prop or Passing an Object as a Prop */}
        {jobs.map((elem) => {
          return <Card key={elem.id} props={elem} />
        })}


        {/* Passing as Individual Props or Separate Props */}
        {/* {jobs.map((elem) => {
        return <div>
          <Card id={elem.id} brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} location={elem.location} />;
        </div>
      })} */}

      </div>

      <h1 className="title">This is User Section.</h1>
      <div className="user-parent">
          {users.map((elem) => {
            return <User key={elem.id} users={elem} />
          })}   
      </div>

    </>
  )
}

export default App