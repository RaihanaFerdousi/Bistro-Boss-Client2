const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2 inter italic"> ---{subHeading}--- </p>
            <h3 className="text-3xl uppercase border-y-4 inter py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;