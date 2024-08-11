# <Angular/> Routing
There are more features that cannot be covered in this short introduction.

<v-clicks depth="2">

- Lazy Loading
- Route Guards
    - CanLoad - decide if the module should be loaded (used for lazy loading)
    - CanMatch - decide if the route should be matched, happens before the activation check
    - CanActivate - for the route itself / parent level navigation
    - CanActivateChild - for child routes / siblings navigation
    - CanDeactivate - for leaving the current route
    - Resolve - pre-fetch data before activating the route
    - <i>Of course, you can chain those guards together for reusable.</i>

</v-clicks>