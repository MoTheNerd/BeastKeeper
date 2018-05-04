
# BeastKeeper
## To get this running on your device:
- Open Terminal
-  ` $ git clone https://github.com/RoyalKingMomo/BeastKeeper.git`
-  ` $ cd BeastKeeper`
-  ` $ brew install npm #(if you haven't already)`
-  ` $ npm install`
-  ` $ react-native run-ios # this is for iOS only. The app should work on Android as well however.`
- This will run the app on a simulator (assuming you're on macOS)
- If you want to deploy to a real device:
-  ` $ open ./ios/BeastKeeper.xcodeproj`
- Fix any codesigning errors there may be
- press the play button. Sometimes you may encounter an error where it says that you have not codesigned. Make sure you codesign the Test targets as well. Note: It is an absolute requirement to run `react-native run-ios` before trying this out since doing so adds a few remaining files to the Xcode Project.
  
## Accomplishments:
- Completed Screen 1 (Home Screen) @hour 6 (expected to finish @hour 8)
- *everything after this was additional
- Started Screen 2 (Animal Views [there's two of them])
- Project end time: 7 hours
- Anticipated end time: 8 hours
- Total time spent in research: 2 hours (included in ptoject time)
  
## Decisions made during coding:
- Split Assets/Components/Views to maintain organized code
- Utilized navigation-stack instead of iOS-Navigation to make app universal
- Switching away from expo after stage 1 prototyping was done
- Aesthetics:
-  - Title Font used: Didot. Effect given: fairy tale type vibes relating to beasts 
-  - Removed white backdrop (looked ugly plus wanted a less cluttered UI)
-  - Rounded corners for My Magnificent Beasts (Card-like look to signify ownership and create friendly UI)
-  - round icons for Beast Finder: gives off friendly UI style (used widely for profile pictures on messenger, facebook, instagram, twitter hence signifying humane aspect)
-  - Background Image (HomeView): Cat picture blurred and darkened such that foreground pops out but background is not dull.
-  - Background Image (MyAnimalView and NearbyAnimalView): first picture (profile picture) of the Animal with an 80% black overlay.
-  - Navigation: Swipe back on iOS or press system back button on android (for familiarity purposes)
  
## What I learned
- First intro to usage of StackNavigator (used iOS Navigator in the past)
- Refresher into ReactNative after a year
- Specific UI differences between Native iOS apps and React-Native apps
- Rapid prototyping with Expo
- More knowledge on OS-specific UI practices
 
## Initial goals:
  
### todo (what I expected to complete in 8 hours):
> implement first page. Fake some data temporarily.
> Needed (page 1):
>  - pressable Image with overlayed text with gradient on top (hence UIView is pressable)
>  - text saying My Magnificent Beasts
>  - Nearby animals
>  - Beast Finder text
  
### on hopefuls list:
> page 2:
>  - Use JSON for all data. (it's not much tbh...)
>  - Animal Profile is the idea (i.e. once you click My Magnificent beasts post or Beast Finder post)
>  - Profile SECTION should include basic data:

*** This much was actually completed ***

>  -  - body weight (float)+kg
>  -  - date of birth (String)
>  -  - Owner (String)
>  -  - Fun fact? (String)
>  - Reminders SECTION should include a section for 2-3 reminders as a proof of concept.
>  - Medical History SECTION should include a section for 2-3 previous medical records as a proof of concept. Ideas:
>  -  - Broken Ankle
>  -  - Therapy session? (idk, do animals have therapy sessions?)
>  -  - CAT Scan (haha)
> page 3 (change "My profile heading to name"):
>  - A section for notifications (fixed view height based on screen height percentage with inner scrollable content [8-9 notifs]).
>  - What is a beast preference?
>  - Contact information
>  -  - profile image
>  -  - Name (see hint on header for page 3)
>  -  - email address
>  -  - House address
>  -  - Phone Number
>  -  - Emergency contact Number
> page 4 (highly doubt you'll make it here but if you do):
>  - calendar view (just do this month)
>  - appointments current in a nice light paleish colour
>  - free days in a nice off-white
>  - clicking on an appointment day deletes it and clicking on a free day intoduces a View with Description as text input. Successful text input means make appointment else do nothing.

## Screenshots:
![Capture1](https://raw.githubusercontent.com/RoyalKingMomo/BeastKeeper/master/assets/images/IMG_1058.PNG)
![Capture2](https://raw.githubusercontent.com/RoyalKingMomo/BeastKeeper/master/assets/images/IMG_1060.PNG)

## Total time taken total: 7 hours