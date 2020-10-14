export default () => {
  return (
    <div className="bg-black text-white px-4 py-12 md:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Rules &amp; Rewards
      </h2>
      <p className="text-white mx-auto mb-4 text-base">
        Filecoin's public bug bounty rewards will launch in late July 2020. Bugs
        submitted today will still be considered for rewards on a case-by-case
        basis. Here are some guidelines for submissions.
      </p>
      <p className="text-white text-base mx-auto">
        <ul className="list-disc px-4">
          <li className="mb-2">
            Issues that have already been submitted by another user or are
            already known to the Filecoin team are not eligible for bounty
            rewards.
          </li>
          <li className="mb-2">
            Public disclosure of a vulnerability makes it ineligible for a
            bounty.
          </li>
          <li className="mb-2">
            You can start or fork a private chain for bug hunting. Please
            respect the Filecoin main and test networks and refrain from
            attacking them.
          </li>
          <li className="mb-2">
            Filecoin's core development team, employees and all other people
            paid by the Filecoin project, directly or indirectly (except for
            Security Research Fellows), are not eligible for rewards.
          </li>
          <li className="mb-2">
            Filecoin websites and general infrastructure are NOT part of the
            bounty program.
          </li>
          <li className="mb-2">
            The Filecoin bounty program considers a number of variables in
            determining rewards. Determinations of eligibility and all terms
            related to an award are at the sole and final discretion of the
            Filecoin bug bounty panel.
          </li>
          <li className="mb-2">
            The quality of the description, reproducibility, and fix (if
            included) are heavily considered when assessing reward amounts and
            Security Research Fellowship appointments.
          </li>
          <li className="mb-2">
            Please review the{' '}
            <a
              className="text-brand-100"
              href="https://github.com/filecoin-project/lotus/blob/master/SECURITY.md#reporting-a-vulnerability"
            >
              critical bug examples
            </a>{' '}
            for guidelines on which types of submissions are the most useful.
          </li>
        </ul>
      </p>
      <a
        href="mailto:security@filecoin.org"
        className="block mx-auto text-center"
      >
        <button className="bg-brand-500 rounded px-5 py-3 text-white mt-16 text-lg transition duration-200 relative hover:bg-brand-600">
          Submit a vulnerability
        </button>
      </a>
    </div>
  );
};
