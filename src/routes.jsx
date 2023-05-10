import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: UserPlusIcon,
    name: "Submit",
    path: "/sign-up",
    element: <SignUp />,
  },
  
];

export default routes;
