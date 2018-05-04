# BeastKeeper

## To get this running on your device:
- Open Terminal
- ` $ git clone https://github.com/RoyalKingMomo/BeastKeeper.git`
- ` $ cd BeastKeeper`
- ` $ brew install npm`
- ` $ npm install`
- ` $ react-native run-ios # this is for iOS only. The app should work on Android as well however.`
- This will run the app on a simulator (assuming you're on macOS)
- If you want to deploy to a real device:
- ` $ open ./ios/BeastKeeper.xcodeproj`
- Fix any codesigning errors there may be
- press the play button. Sometimes you may encounter an error where it says that you have not codesigned. Makse sure you codesign the Test targets as well. Note: It is an absolute requirement to run `react-native run-ios` before trying this out since doing so adds a few remaining files to the Xcode Project.


## Initial goals:

### todo (what I expected to complete in 8 hours):
> implement first page. Fake some data temporarily. 
> Needed (page 1):
> - pressable Image with overlayed text with gradient on top (hence UIView is pressable)
> - text saying My Magnificent Beasts
> - Nearby animals
> - Beast Finder text

### on hopefuls list:
> page 2:
> - Use JSON for all data. (it's not much tbh...)
> - Animal Profile is the idea (i.e. once you click My Magnificent beasts post or Beast Finder post)
> - Profile SECTION should include basic data:
> **** this is where I am
> - - body weight (float)+kg
> - - date of birth (String)
> - - Owner (String)
> - - Fun fact? (String)
> - Reminders SECTION should include a section for 2-3 reminders as a proof of concept.
> - Medical History SECTION should include a section for 2-3 previous medical records as a proof of concept. Ideas:
> - - Broken Ankle
> - - Therapy session? (idk, do animals have therapy sessions?)
> - - CAT Scan (haha)
> page 3 (change "My profile heading to name"):
> - A section for notifications (fixed view height based on screen height percentage with inner scrollable content [8-9 notifs]).
> - What is a beast preference?
> - Contact information
> - - profile image
> - - Name (see hint on header for page 3)
> - - email address
> - - House address
> - - Phone Number
> - - Emergency contact Number
> page 4 (highly doubt you'll make it here but if you do):
> - calendar view (just do this month)
> - appointments current in a nice light paleish colour
> - free days in a nice off-white
> - clicking on an appointment day deletes it and clicking on a free day intoduces a View with Description as text input. Successful text input means make appointment else do nothing.

# Total Time taken so far: 7 hours