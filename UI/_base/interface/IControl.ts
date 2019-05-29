/**
 * Base control options interface
 *
 * @name UI/Base:Control#readOnly
 * @cfg {Boolean} Determines whether user can change control's value
 * (or interact with the control if its value is not editable).
 * @variant true User cannot change control's value (or interact with the control if its value is not editable).
 * @variant false User can change control's value (or interact with the control if its value is not editable).
 * @variant inherited Value inherited from the parent.
 * @default Inherited
 * @example
 * In this example, List and Input.Text will be rendered with read-only styles, and the user won't be
 * able to edit them. However, Button has readOnly option explicitly set to false,
 * thus it won't inherit this option from the List, and user will be able to click on it.
 * <pre>
 *    <Controls.list:View readOnly="{{true}}">
 *       <ws:itemTemplate>
 *          <Controls.input:Text />
 *          <Controls.buttons:Path readOnly="{{false}}" />
 *       </ws:itemTemplate>
 *    </Controls.list:View>
 * </pre>
 * @remark This option is inherited. If option is not set explicitly, option's value will be inherited
 * from the parent control. By default, all controls are active.
 * @see Inherited options
 */

/**
 * @name UI/Base:Control#theme
 * @cfg {String} Theme name. Depending on the theme, different stylesheets are loaded and
 * different styles are applied to the control.
 * @variant any Any value that was passed to the control.
 * @variant inherited Value inherited from the parent.
 * @default ''(empty string)
 * @example
 * In this example, Controls.Application and all of its chil controls will have "carry" theme styles.
 * However, Carry.Head will "carry" theme styles. If you put controls inside Carry.Head and does not specify
 * the theme option, they will inherit "carry" theme.
 * <pre>
 *    <Controls.Application theme="carry">
 *       <Carry.Head theme="presto" />
 *       <Carry.Workspace>
 *          <Controls.Tree />
 *       </Carry.Workspace>
 *    </Controls.Application>
 * </pre>
 * @remark This option is inherited. If option is not set explicitly, option's value will be inherited
 * from the parent control. The path to CSS file with theme parameters determined automatically
 * based on the theme name. CSS files should be prepared in advance according to documentation.
 * @see Themes
 * @see Inherited options
 */
export interface IControlOptions {
    theme?: string;
    readOnly?: boolean;
}

/**
 * Base control interface
 */
export interface IControl {
}
