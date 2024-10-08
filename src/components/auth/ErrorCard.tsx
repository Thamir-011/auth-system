import CardWrapper from "@/components/auth/CardWrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <hr />
    </CardWrapper>
  );
};

export default ErrorCard;
