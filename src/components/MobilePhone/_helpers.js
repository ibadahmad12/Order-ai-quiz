import MenuHeader from "../../assets/images/food-menu-header.png";
import OrderHeader from "../../assets/images/menu-header-1.png";
import PhoneHeader from "../../assets/images/ios-layout-header-light@2x.png";

export const handleSocketResponse = (socketResponse, userID, firstName) => {
  switch (socketResponse?.eventType) {
    case "VS011":
      return {
        message:
          'Now, confirm you want delivery or switch to pick-up. Enter your name and click "Next."',
        paymentComplete: false,
      };

    case "NS001":
      return {
        message:
          "Here, you can set up a TEXT-PIN so the restaurant can save your card info and order history for future use! For now, use 1234 as your PIN.",
        paymentComplete: false,
      };

    case "NS002":
      return {
        message:
          "You're all set to checkout! You can make any final updates or add special instructions. Then, press 'Checkout.'",
        paymentComplete: false,
      };

    case "SP001":
      return {
        message: "Now, enter your card information to submit your order!",
        paymentComplete: false,
      };

    case "PS002":
      return {
        message:
          'Now, confirm you want delivery or switch to pick-up. Enter your name and click "Next."',
        paymentComplete: false,
      };

    case "CS001":
      if (
        socketResponse?.userID &&
        userID &&
        userID === socketResponse?.userID
      ) {
        return {
          paymentComplete: true,
          message: `You did it! Great job, ${
            firstName ? firstName : "Michelle"
          }! See how easy that was? There's a lot more to discover, so read-on to see what OrderAI can do!`,
        };
      }
      break;

    case "CS002":
      return {
        message:
          "Here, you can set up a TEXT-PIN so the restaurant can save your card info and order history for future use! For now, use 1234 as your PIN.",
        paymentComplete: false,
      };

    default:
      break;
  }
};

export const handleAPIResponseCloudys = (responseType) => {
  if (responseType.toLowerCase() === "hello") {
    return 'Already know what you want? Just type the item name to order! Not sure what to order? Just text "MENU."';
  } else if (responseType.toLowerCase() === "menu") {
    return "Click on the link in the text to check out the full menu.";
  } else {
    return "Now, you can review your order and checkout process—just click the link!";
  }
};

export const updateHeader = (iframe) => {
  if (!iframe) return PhoneHeader;
  else {
    if (
      iframe ===
      "https://ordr-assets.s3.us-east-2.amazonaws.com/hungerrush360.png"
    )
      return MenuHeader;
    else return OrderHeader;
  }
};

export const handleIframeClosingCloudys = (iframe) => {
  if (
    iframe ===
    "https://ordr-assets.s3.us-east-2.amazonaws.com/hungerrush360.png"
  ) {
    return "Click on the link in the text to check out the full menu.";
  } else {
    return "Now, you can review your order and checkout process—just click the link!";
  }
};
