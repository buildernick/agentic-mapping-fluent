# Design System Component Reference

This document provides a comprehensive overview of the design system's component architecture and available components for code generation and development reference.

## System Architecture

The design system follows a modular component-based architecture where each component group provides specific functionality. Components are organized into logical groups that can work independently or in combination with other components.

### Component Organization Principles

- **Single Responsibility**: Each component group serves a specific purpose
- **Composability**: Components can be combined to create complex interfaces
- **Consistency**: All components follow the same design patterns and API conventions
- **Accessibility**: Components are built with accessibility standards in mind

## Documentation Structure

For detailed documentation on any component group, refer to the corresponding MDX file in the `design-system-docs` folder. The documentation files follow the naming convention:

```
design-system-docs/[componentgroupname].mdx
```

For example:

- `design-system-docs/button.mdx` - Detailed documentation for Button component
- `design-system-docs/table.mdx` - Detailed documentation for Table component
- `design-system-docs/annotationcontext.mdx` - Detailed documentation for the AnnotationContext group
- `design-system-docs/applayout.mdx` - Detailed documentation for AppLayout component

These MDX files contain comprehensive information including:

- Component API documentation
- Usage examples
- Props and configuration options
- Best practices and implementation guidelines
- Accessibility requirements
- Integration patterns with other components

## Component Categories

### Layout & Structure

Components that provide foundational layout and structural elements for applications.

**Card** - Use this component group for card layouts with strongly coupled header, footer, and preview components
**Divider** - Use this component to create visual separators
**Overflow** - Use this component to handle overflow of items in a container
**Portal** - Use this component to render content in a specific DOM layer
**Accordion** - Use this component group for accordion functionality with required hierarchical parent-child structure

### Navigation

Components for user navigation and wayfinding within applications.

**Breadcrumb** - Use this component group for navigation breadcrumbs with required hierarchical structure
**Link** - Use this component for hyperlink functionality
**Tabs** - Use this component group for tabbed interface functionality with required context between tab list and individual tabs
**Tree** - Use this component group for tree view functionality with required hierarchical parent-child relationships

### Form Controls

Interactive components for user input and data collection.

**Checkbox** - Use this component for checkbox input controls
**RadioGroup** - Use this component group for radio button group functionality with required shared context
**Input** - Use this component for text input functionality
**Textarea** - Use this component for multiline text input functionality
**Combobox** - Use this component group for combobox, dropdown, and listbox functionality with shared context dependencies
**Select** - Use this component for dropdown selection functionality
**Slider** - Use this component for range input functionality
**SpinButton** - Use this component for numeric input with spin controls
**Switch** - Use this component for boolean toggle functionality
**SearchBox** - Use this component for search input functionality
**ColorPicker** - Use this component group for comprehensive color selection functionality with functional coupling
**SwatchPicker** - Use this component group for color swatch selection with required group context
**TagPicker** - Use this component group for tag selection functionality with complex interdependent structure

### Data Display

Components for presenting and organizing data and content.

**Table** - Use this component group to display tabular data with required hierarchical structure including headers, body, rows, and cells
**List** - Use this component group for list functionality with required parent-child relationship
**Text** - Use this component for styled text display
**Body1** - Use this component for body text styling
**Body1Strong** - Use this component for strong body text styling
**Body1Stronger** - Use this component for stronger body text styling
**Body2** - Use this component for secondary body text styling
**Caption1** - Use this component for caption text styling
**Caption1Strong** - Use this component for strong caption text styling
**Caption1Stronger** - Use this component for stronger caption text styling
**Caption2** - Use this component for secondary caption text styling
**Caption2Strong** - Use this component for strong secondary caption text styling
**Display** - Use this component for display text styling
**LargeTitle** - Use this component for large title text styling
**Subtitle1** - Use this component for subtitle text styling
**Subtitle2** - Use this component for secondary subtitle text styling
**Subtitle2Stronger** - Use this component for stronger secondary subtitle text styling
**Title1** - Use this component for primary title text styling
**Title2** - Use this component for secondary title text styling
**Title3** - Use this component for tertiary title text styling
**Image** - Use this component for responsive image display with loading states
**Avatar** - Use this component to display user information with avatar
**AvatarGroup** - Use this component group for displaying collections of avatars with required group context
**Persona** - Use this component to display user information with avatar
**Badge** - Use this component for badge display functionality
**CounterBadge** - Use this component for counter badge functionality
**PresenceBadge** - Use this component for presence badge functionality
**Rating** - Use this component group for rating functionality with required compositional relationships
**TagGroup** - Use this component group for tag collections with required group context and interaction dependencies

### Interactive Elements

Components for user interaction and actions.

**Button** - Use this component for standard button functionality
**CompoundButton** - Use this component for compound button functionality
**MenuButton** - Use this component for menu button functionality
**SplitButton** - Use this component for split button functionality
**ToggleButton** - Use this component for toggle button functionality
**Menu** - Use this component group for dropdown menu functionality with required hierarchical structure and context dependencies
**Dialog** - Use this component group for modal dialog functionality with required compositional structure
**Popover** - Use this component for popover positioning functionality
**Tooltip** - Use this component for tooltip functionality
**Drawer** - Use this component group for drawer/panel functionality with required compositional structure
**Toolbar** - Use this component group for toolbar functionality with required context sharing between toolbar and its items
**Carousel** - Use this component group for carousel functionality with complex architectural coupling between navigation and content

### Feedback & Communication

Components for providing feedback and communicating with users.

**MessageBar** - Use this component group for status messages with required compositional structure
**ProgressBar** - Use this component to display progress status
**Spinner** - Use this component to display loading indicators
**Skeleton** - Use this component to display loading placeholders
**AriaLiveAnnouncer** - Use this component to announce content changes to screen readers
**TeachingPopover** - Use this component group for instructional popovers with complex architectural coupling

### Form Organization

Components for structuring and organizing forms.

**Field** - Use this component for form field functionality
**Label** - Use this component for form labels and descriptive text
**InfoLabel** - Use this component for informational labels
**InfoButton** - Use this component for informational buttons

## Usage Guidelines

### Component Dependencies

- Most components are self-contained and can be used independently
- The **Table** component group requires multiple components to work together (Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell, etc.)
- The **Menu** component group requires hierarchical structure and context dependencies (Menu, MenuItem, MenuList, MenuGroup, etc.)
- The **Dialog** component group works with multiple compositional components (Dialog, DialogTitle, DialogBody, DialogActions, etc.)
- The **Accordion** component group requires hierarchical parent-child structure (Accordion, AccordionHeader, AccordionItem, AccordionPanel)
- The **Tabs** component group requires context between tab list and individual tabs (Tab, TabList)
- The **Card** component group includes strongly coupled components (Card, CardHeader, CardFooter, CardPreview)
- The **Breadcrumb** component group requires hierarchical structure (Breadcrumb, BreadcrumbItem, BreadcrumbDivider, BreadcrumbButton)
- The **RadioGroup** component group requires shared context (RadioGroup, Radio)
- The **Tree** component group requires hierarchical parent-child relationships (Tree, TreeItem, TreeItemLayout, etc.)
- The **Toolbar** component group requires context sharing between toolbar and its items (Toolbar, ToolbarButton, ToolbarGroup, etc.)
- The **AvatarGroup** component group requires group context (AvatarGroup, AvatarGroupItem, AvatarGroupPopover)
- The **Rating** component group requires compositional relationships (Rating, RatingItem, RatingDisplay)
- The **TagGroup** component group requires group context and interaction dependencies (TagGroup, Tag, InteractionTag, etc.)
- The **TagPicker** component group has complex interdependent structure (TagPicker, TagPickerInput, TagPickerList, etc.)
- The **SwatchPicker** component group requires group context (SwatchPicker, ColorSwatch, ImageSwatch, etc.)
- The **ColorPicker** component group has functional coupling (ColorPicker, ColorSlider, ColorArea, AlphaSlider)
- The **Carousel** component group has complex architectural coupling between navigation and content
- The **TeachingPopover** component group has complex architectural coupling with multiple sub-components
- The **Drawer** component group requires compositional structure (Drawer, OverlayDrawer, InlineDrawer, DrawerBody, etc.)
- The **List** component group requires parent-child relationship (List, ListItem)
- The **Combobox** component group has shared context dependencies (Combobox, Dropdown, Listbox, Option, OptionGroup)
- Popover-related components work together (Popover, PopoverSurface, PopoverTrigger)
- Overflow components work together (Overflow, OverflowItem, OverflowDivider)
- Skeleton components work together (Skeleton, SkeletonItem)
- Badge variants are related but independent (Badge, CounterBadge, PresenceBadge)
- Text styling components are part of a typography system

### Integration Patterns

- Layout components (Card, Divider, Portal) typically serve as containers for other components
- Form controls should be wrapped in Field components for proper labeling and structure
- Navigation components (Breadcrumb, Tabs, Tree) can be used independently or as part of larger layout structures
- Data display components (Table, List) can be enhanced with interactive elements like buttons and selection
- Interactive elements (Menu, Dialog, Popover, Tooltip) provide overlay functionality for enhanced user interactions
- Text styling components follow a consistent typography hierarchy
- Avatar and Persona components can be used individually or in groups

### Accessibility Considerations

- All components are built with accessibility in mind
- Use semantic HTML structures provided by the components
- Leverage built-in ARIA attributes and keyboard navigation
- The **AriaLiveAnnouncer** component provides additional accessibility announcements when needed
- Form components (Field, Label, InfoLabel) enhance form accessibility
- Interactive components provide proper keyboard navigation and focus management
- Components with hierarchical structures maintain proper accessibility relationships

### Responsive Design

- Layout components provide responsive behavior out of the box
- Overflow components handle responsive layout changes automatically
- Drawer components provide different layout modes (overlay vs inline)
- Table components support responsive column handling
- Navigation components adapt to different screen sizes

### Performance Considerations

- **Skeleton** components provide loading placeholders to improve perceived performance
- **Image** component includes loading states for better user experience
- **Portal** component provides efficient DOM layer management
- Overflow components optimize rendering of large item sets

## Usage Reference

This reference should be used to understand the available components and their intended purposes when generating code or building applications with this design system. For specific implementation details, always consult the corresponding MDX documentation file in the `design-system-docs` folder.

### Component Selection Guidelines

When choosing components for specific use cases:

1. **For forms**: Use Field, Label, Input, Textarea, Checkbox, RadioGroup, Combobox, Select, Switch, Slider, SpinButton, and SearchBox for various input types
2. **For data tables**: Use Table component group with required hierarchical structure including headers, body, rows, and cells
3. **For navigation**: Choose between Breadcrumb (hierarchical), Tabs (tabbed), Tree (hierarchical data), or Link (simple hyperlinks) based on your needs
4. **For people/user interfaces**: Use Avatar, AvatarGroup, and Persona components
5. **For layouts**: Use Card for content containers, Divider for separators, Portal for layer management, and Overflow components for responsive handling
6. **For interactive overlays**: Choose between Dialog (modal), Drawer (panel), Popover (contextual), or Tooltip (hover) based on your use case
7. **For buttons and actions**: Use appropriate Button variants (Button, CompoundButton, MenuButton, SplitButton, ToggleButton) or Toolbar for action groups
8. **For feedback and status**: Use MessageBar for notifications, ProgressBar for progress, Spinner for loading, Skeleton for placeholders, or TeachingPopover for instructions
9. **For text and content**: Use appropriate Text styling components for typography hierarchy, Image for media, and Badge components for status indicators
10. **For selections and tags**: Use TagGroup, TagPicker for tag management, Rating for user ratings, and various picker components for specialized selection needs
11. **For color selection**: Use ColorPicker for comprehensive color selection or SwatchPicker for predefined color swatches

### Theme and Styling

- All components support both light and dark modes when properly themed
- Components follow FluentUI design system principles for consistent styling
- Text styling components provide consistent typography hierarchy
- Badge and status components follow consistent visual patterns
