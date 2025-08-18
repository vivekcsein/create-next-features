import React from "react";
import { BioDataFormInputs } from "./biodata.form";
import { safeParseDateToString } from "@/libs/configs/config.schema";

interface BiodataPreviewProps {
  formData: BioDataFormInputs | null;
  Ref: React.RefObject<HTMLDivElement | null>;
}
const BiodataPreview = ({ formData, Ref }: BiodataPreviewProps) => {
  if (!formData)
    return <div className="text-center p-8">No biodata available.</div>;

  const {
    fullname,
    dateOfBirth,
    age,
    height,
    weight,
    complexion,
    bloodGroup,
    maritalStatus,
    religion,
    caste,
    motherTongue,
    nationality,
    address,
    city,
    state,
    pincode,
    phone,
    email,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
    siblings,
    familyType,
    familyValues,
    education,
    college,
    occupation,
    company,
    income,
    workLocation,
    partnerAge,
    partnerHeight,
    partnerEducation,
    partnerOccupation,
    partnerLocation,
    hobbies,
    aboutMe,
  } = formData;

  return (
    <section>
      <div
        ref={Ref}
        id="biodata-content"
        className="relative bg-white shadow-2xl rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url(/images/biodata-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "1123px", // A4 height in pixels at 96 DPI
          width: "794px", // A4 width in pixels at 96 DPI
          margin: "0 auto",
        }}
      >
        <div className="relative z-10 p-12 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 text-yellow-300">
              {fullname || "Full Name"}
            </h1>
            <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-yellow-300 text-sm">Photo</span>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
                Personal Details
              </h2>
              <div className="space-y-2 text-sm">
                {dateOfBirth && (
                  <p>
                    <span className="font-medium">Date of Birth:</span>{" "}
                    {safeParseDateToString(dateOfBirth)}
                  </p>
                )}
                {age && (
                  <p>
                    <span className="font-medium">Age:</span> {age} years
                  </p>
                )}
                {height && (
                  <p>
                    <span className="font-medium">Height:</span> {height}
                  </p>
                )}
                {weight && (
                  <p>
                    <span className="font-medium">Weight:</span> {weight}
                  </p>
                )}
                {complexion && (
                  <p>
                    <span className="font-medium">Complexion:</span>{" "}
                    {complexion}
                  </p>
                )}
                {bloodGroup && (
                  <p>
                    <span className="font-medium">Blood Group:</span>{" "}
                    {bloodGroup}
                  </p>
                )}
                {maritalStatus && (
                  <p>
                    <span className="font-medium">Marital Status:</span>{" "}
                    {maritalStatus}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
                Religious Details
              </h2>
              <div className="space-y-2 text-sm">
                {religion && (
                  <p>
                    <span className="font-medium">Religion:</span> {religion}
                  </p>
                )}
                {caste && (
                  <p>
                    <span className="font-medium">Caste:</span> {caste}
                  </p>
                )}
                {motherTongue && (
                  <p>
                    <span className="font-medium">Mother Tongue:</span>{" "}
                    {motherTongue}
                  </p>
                )}
                {nationality && (
                  <p>
                    <span className="font-medium">Nationality:</span>{" "}
                    {nationality}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
              Contact Information
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 text-sm">
                {address && (
                  <p>
                    <span className="font-medium">Address:</span> {address}
                  </p>
                )}
                {city && (
                  <p>
                    <span className="font-medium">City:</span> {city}
                  </p>
                )}
                {state && (
                  <p>
                    <span className="font-medium">State:</span> {state}
                  </p>
                )}
                {pincode && (
                  <p>
                    <span className="font-medium">Pincode:</span> {pincode}
                  </p>
                )}
              </div>
              <div className="space-y-2 text-sm">
                {phone && (
                  <p>
                    <span className="font-medium">Phone:</span> {phone}
                  </p>
                )}
                {email && (
                  <p>
                    <span className="font-medium">Email:</span> {email}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Family Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
              Family Details
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 text-sm">
                {fatherName && (
                  <p>
                    <span className="font-medium">Father&apos;s Name:</span>{" "}
                    {fatherName}
                  </p>
                )}
                {fatherOccupation && (
                  <p>
                    <span className="font-medium">
                      Father&apos;s Occupation:
                    </span>{" "}
                    {fatherOccupation}
                  </p>
                )}
                {motherName && (
                  <p>
                    <span className="font-medium">Mother&apos;s Name:</span>{" "}
                    {motherName}
                  </p>
                )}
                {motherOccupation && (
                  <p>
                    <span className="font-medium">
                      Mother&apos;s Occupation:
                    </span>{" "}
                    {motherOccupation}
                  </p>
                )}
              </div>
              <div className="space-y-2 text-sm">
                {siblings && (
                  <p>
                    <span className="font-medium">Siblings:</span> {siblings}
                  </p>
                )}
                {familyType && (
                  <p>
                    <span className="font-medium">Family Type:</span>{" "}
                    {familyType}
                  </p>
                )}
                {familyValues && (
                  <p>
                    <span className="font-medium">Family Values:</span>{" "}
                    {familyValues}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Education & Career */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
              Education & Career
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2 text-sm">
                {education && (
                  <p>
                    <span className="font-medium">Education:</span> {education}
                  </p>
                )}
                {college && (
                  <p>
                    <span className="font-medium">College:</span> {college}
                  </p>
                )}
                {occupation && (
                  <p>
                    <span className="font-medium">Occupation:</span>{" "}
                    {occupation}
                  </p>
                )}
              </div>
              <div className="space-y-2 text-sm">
                {company && (
                  <p>
                    <span className="font-medium">Company:</span> {company}
                  </p>
                )}
                {income && (
                  <p>
                    <span className="font-medium">Annual Income:</span> {income}
                  </p>
                )}
                {workLocation && (
                  <p>
                    <span className="font-medium">Work Location:</span>{" "}
                    {workLocation}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Partner Preferences */}
          {(partnerAge ||
            partnerHeight ||
            partnerEducation ||
            partnerOccupation ||
            partnerLocation) && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
                Partner Preferences
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2 text-sm">
                  {partnerAge && (
                    <p>
                      <span className="font-medium">Age:</span> {partnerAge}
                    </p>
                  )}
                  {partnerHeight && (
                    <p>
                      <span className="font-medium">Height:</span>{" "}
                      {partnerHeight}
                    </p>
                  )}
                  {partnerEducation && (
                    <p>
                      <span className="font-medium">Education:</span>{" "}
                      {partnerEducation}
                    </p>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  {partnerOccupation && (
                    <p>
                      <span className="font-medium">Occupation:</span>{" "}
                      {partnerOccupation}
                    </p>
                  )}
                  {partnerLocation && (
                    <p>
                      <span className="font-medium">Location:</span>{" "}
                      {partnerLocation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Additional Information */}
          {(hobbies || aboutMe) && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-300 border-b border-yellow-300/30 pb-2">
                Additional Information
              </h2>
              <div className="space-y-4 text-sm">
                {hobbies && (
                  <div>
                    <p className="font-medium mb-1">Hobbies & Interests:</p>
                    <p className="text-gray-100">{hobbies}</p>
                  </div>
                )}
                {aboutMe && (
                  <div>
                    <p className="font-medium mb-1">About Me:</p>
                    <p className="text-gray-100">{aboutMe}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BiodataPreview;
