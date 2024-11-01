import { __ } from '@wordpress/i18n';
import { TextControl,PanelBody } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, isSelected, setAttributes } ) {
    const blockProps = useBlockProps();
    const {message, link} = attributes;

    function onChangeLinkField( newContent ) {
			setAttributes( { link: newContent } );
		}

    return (
      <div { ...blockProps }>
        <a className="button" href="#">
          <span className="button__icon-wrapper">
            <svg
              width={10}
              className="button__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              />
            </svg>
            <svg
              className="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              />
            </svg>
          </span>
          { message && ! isSelected ? (
                <div>{ message }</div>
            ) : (
              <TextControl
              value={ message }
              onChange={ ( val ) => setAttributes( { message: val } ) }
          />
            ) }
        </a>
        <InspectorControls>
					<PanelBody title={ __( 'Settings' ) }>
						<TextControl
							label="Link"
							help="URL of your button."
							value={ link }
							onChange={ onChangeLinkField }
						/>
					</PanelBody>
				</InspectorControls>
      </div>
    );
}