/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { NavigationBlocker } from './NavigationBlocker';

export function useNavigatingAway(canShowDialogPrompt) {
	const navigate = useNavigate();
	const currentLocation = useLocation();
	const [ showDialogPrompt, setShowDialogPrompt ] = useState(false);
	const [ wantsToNavigateTo, setWantsToNavigateTo ] = useState(null);
	const [ isNavigationConfirmed, setIsNavigationConfirmed ] = useState(false);

	const handleNavigationBlocking = useCallback(
		(locationToNavigateTo) => {
			if (!isNavigationConfirmed && locationToNavigateTo.location.pathname !== currentLocation.pathname) {
				setShowDialogPrompt(true);
				setWantsToNavigateTo(locationToNavigateTo);
				return false;
			}
			return true;
		},
		[ isNavigationConfirmed ]
	);

	const cancelNavigation = useCallback(() => {
		setIsNavigationConfirmed(false);
		setShowDialogPrompt(false); // Close dialog
	}, []);

	const confirmNavigation = useCallback(() => {
		setIsNavigationConfirmed(true);
		setShowDialogPrompt(false); // Close dialog
	}, []);

	useEffect(
		() => {
			if (isNavigationConfirmed && wantsToNavigateTo) {
				navigate(wantsToNavigateTo.location.pathname);
			}
		},
		[ isNavigationConfirmed, wantsToNavigateTo ]
	);

	NavigationBlocker(handleNavigationBlocking, canShowDialogPrompt);

	return [ showDialogPrompt, confirmNavigation, cancelNavigation ];
}
