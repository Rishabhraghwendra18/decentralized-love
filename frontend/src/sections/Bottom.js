function MessageTemplate({text}) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-8/12 outline outline-4 outline-indigo rounded flex justify-center p-4">
            {text}
      </div>
    </div>
  );
}
export default function Bottom({message}) {
  return (
    <div className="flex flex-col items-center p-2 gap-y-2">
      <h1 className="text-3xl font-medium text-black">Your Messages</h1>
      {message ? <MessageTemplate text={message}></MessageTemplate> : null}
    </div>
  );
}
