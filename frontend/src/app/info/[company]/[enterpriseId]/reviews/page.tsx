
import CompanyReview from "@/components/CompanyReviews"


type Props = {
  params: {
    company: string;
    enterpriseId:number
  };
};

export default async function CompanyPage({ params: { company,enterpriseId } }: Props) {
  
  const companyName = decodeURI(company)
  const enterpriseId_ = enterpriseId

  return (
    <CompanyReview enterpriseId={enterpriseId_}/>
  );
}
