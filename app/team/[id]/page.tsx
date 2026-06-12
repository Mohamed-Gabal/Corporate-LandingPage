

type Props = {
  params: Promise<{ id: string }>;
}

const DynamicTeamPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className='text-white'>DynamicTeamPage {id}</div>
  );
}
export default DynamicTeamPage;