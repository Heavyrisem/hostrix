import { rawHostsService, usePingMutation } from "@/features/home/query";

import { useQuery } from "@tanstack/react-query";

export function Home() {
  const { mutate } = usePingMutation();
  const { data: hosts } = useQuery(rawHostsService.queryOptions());

  const handleClick = () => {
    mutate({ data: "test" }, { onSuccess: (res) => console.log(res) });
  };

  return (
    <div>
      HOME
      <pre>
        <code>{hosts}</code>
      </pre>
      <button onClick={handleClick}>test</button>
    </div>
  );
}
