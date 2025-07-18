import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("termsandconditions", "routes/components/termsAndConditions.tsx"),
] satisfies RouteConfig;
