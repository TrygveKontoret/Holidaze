import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Please fill in your name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  subject: yup
    .string()
    .min(4, "Subject must be at least 4 characteers")
    .required("Please enter subject."),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Please enter your message"),
});

export const loginSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

const rooms = ["Small room", "Medium room", "Large room"];

export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .required("Please fill in your name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),
  room: yup
    .string()
    .oneOf(rooms, "Please select a room")
    .required("Please select a room"),

  checkin: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Please input checkin date"),
  checkout: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Please input checkout date"),
});

const imageRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;

export const hotelSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Hotel name must be at least 3 characters")
    .required("Please enter hotel name"),

  description: yup
    .string()
    .min(300, "Hotel description must be at least 300 characters")
    .required("Please enter hotel description"),

  image1: yup
    .string()
    .matches(imageRegex, "Wrong image format")
    .required("Please fill in image url"),

  image2: yup
    .string()
    .matches(imageRegex, "Wrong image format")
    .required("Please fill in image url"),

  image3: yup
    .string()
    .matches(imageRegex, "Wrong image format")
    .required("Please fill in image url"),

  image4: yup
    .string()
    .matches(imageRegex, "Wrong image format")
    .required("Please fill in image url"),

  star: yup
    .number()
    .typeError("Must be a number")
    .min(1, "Must be at least one star")
    .max(5, "Can't be more than five stars")
    .required("Please enter amount of hotel stars"),

  rating: yup
    .number()
    .typeError("Must be a number")
    .min(0)
    .max(10, "rating can't be higher than 10")
    .required("Please fill in user rating"),

  userRating: yup
    .number()
    .typeError("Must be a number")
    .min(1, "Must be at least one user rating")
    .required("Please fill in amount of users"),

  featured: yup.boolean(),
});
