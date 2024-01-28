type BaseMotion = {
	from: "defendant" | "plaintiff";
	reason: string;
}

type PreTrialMotion = BaseMotion & {
	classification: "dismissals" | "supressions" | "venue";
	step: "pre-trial";
};

type PostTrialMotion = BaseMotion & {
	classification: "acquittals" | "corrections" | "new trial";
	step: "post-trial";
}

type TrialMotion = PostTrialMotion | PreTrialMotion;

type AllowedMotion = TrialMotion & {
	deliberationHours?: number;
	status: "allowed";
};

type DeniedMotion = TrialMotion & {
	deliberationHours?: number;
	annoyedJustice?: boolean;
	status: "denied";
};

type PendingMotion = TrialMotion & {
	estimatedDeliberationHours?: number;
	status: "pending";
}

export type Motion = AllowedMotion | DeniedMotion | PendingMotion; 

export const motions: Motion[] = [
	{
		annoyedJustice: true,
		classification: "acquittals",
		deliberationHours: 1,
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "corrections",
		deliberationHours: 2.5,
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		status: "denied",
		step: "post-trial",
	},
	{
		classification: "supressions",
		deliberationHours: 4,
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		status: "allowed",
		step: "pre-trial",
	},
	{
		classification: "new trial",
		estimatedDeliberationHours: 3,
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		status: "pending",
		step: "post-trial",
	},
	{
		annoyedJustice: false,
		classification: "dismissals",
		deliberationHours: 0.5,
		from: "plaintiff",
		reason: "It seems like you have a tenuous grasp on the English language in general.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "corrections",
		deliberationHours: 1.5,
		from: "defendant",
		reason: "Fillibuster?",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "venue",
		deliberationHours: 0.25,
		from: "defendant",
		reason: "A time was never specified for the duel.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "corrections",
		deliberationHours: 5,
		from: "plaintiff",
		reason: "He's making a few good points!",
		status: "denied",
		step: "post-trial",
	},
];