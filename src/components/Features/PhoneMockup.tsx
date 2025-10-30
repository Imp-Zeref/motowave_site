interface PhoneMockupProps {
  image: string;
}

export default function PhoneMockup({ image }: PhoneMockupProps) {
  return (
    <div className="mx-auto flex justify-center">
      <div className="w-[230px] sm:w-[260px] md:w-[300px]">
        <img
          src={image}
          className="w-full h-auto rounded-xl shadow-xl"
          alt="App Screen"
        />
      </div>
    </div>
  );
}