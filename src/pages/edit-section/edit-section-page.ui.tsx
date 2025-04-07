import { useGetSectionByNameMutation } from "@/features/hosts/query";

export function EditSectionPage() {
  const { mutate } = useGetSectionByNameMutation();

  const handleClick = () => {
    mutate("test", {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  return (
    <div>
      EditSectionPage
      <button onClick={handleClick}>눌러라</button>
    </div>
  );
}
