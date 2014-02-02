<?php defined('PHPFOX') or exit('NO DICE!'); ?>
<?php /* Cached: January 21, 2014, 6:51 pm */ ?>
<?php 
/**
 * [PHPFOX_HEADER]
 * 
 * @copyright		[PHPFOX_COPYRIGHT]
 * @author  		Raymond Benc
 * @package 		Phpfox
 * @version 		$Id: form.html.php 3826 2011-12-16 12:30:19Z Raymond_Benc $
 */
 
 

?>
		<div class="custom_block_form">
<?php if ($this->_aVars['aSetting']['var_type'] == 'textarea'): ?>
				<textarea class="custom_textarea" cols="60" style="width:90%;" rows="8" name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>]"><?php if (isset ( $this->_aVars['aSetting']['value'] )):  echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aSetting']['value']);  endif; ?></textarea>
<?php elseif ($this->_aVars['aSetting']['var_type'] == 'text'): ?>
				<input type="text" name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>]" value="<?php if (isset ( $this->_aVars['aSetting']['value'] )):  echo Phpfox::getLib('phpfox.parse.output')->clean($this->_aVars['aSetting']['value']);  endif; ?>" size="30" maxlength="255"<?php if (PHPFOX_IS_AJAX): ?> style="width:90%;"<?php endif; ?> />
<?php elseif ($this->_aVars['aSetting']['var_type'] == 'select'): ?>
				<select name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>]" id="custom_field_<?php echo $this->_aVars['aSetting']['field_id']; ?>">
<?php if (! $this->_aVars['aSetting']['is_required'] && ! isset ( $this->_aVars['aSetting']['value'] )): ?>
<?php if (! isset ( $this->_aVars['aSetting']['value'] )): ?>
							<option value=""><?php echo Phpfox::getPhrase('custom.select'); ?>:</option>
<?php endif; ?>
<?php else: ?>
<?php if (! $this->_aVars['aSetting']['is_required']): ?>
						<option value=""><?php echo Phpfox::getPhrase('custom.no_answer'); ?></option>
<?php else: ?>
<?php if (! isset ( $this->_aVars['aSetting']['value'] )): ?>
						<option value=""><?php echo Phpfox::getPhrase('custom.select'); ?>:</option>
<?php endif; ?>
<?php endif; ?>
<?php endif; ?>
					
<?php if (count((array)$this->_aVars['aSetting']['options'])):  foreach ((array) $this->_aVars['aSetting']['options'] as $this->_aVars['iKey'] => $this->_aVars['sOption']): ?>
						<option value="<?php echo $this->_aVars['iKey']; ?>"<?php if (isset ( $this->_aVars['sOption']['selected'] ) && ( $this->_aVars['sOption']['selected'] == true || $this->_aVars['sOption']['selected'] == 1 )): ?> selected="selected"<?php endif; ?>><?php echo $this->_aVars['sOption']['value']; ?></option>
<?php endforeach; endif; ?>
				</select>
<?php elseif ($this->_aVars['aSetting']['var_type'] == 'multiselect'): ?>
				<select name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>][]" multiple="multiple" id="custom_field_<?php echo $this->_aVars['aSetting']['field_id']; ?>">
					
<?php if (count((array)$this->_aVars['aSetting']['options'])):  foreach ((array) $this->_aVars['aSetting']['options'] as $this->_aVars['iKey'] => $this->_aVars['aOption']): ?>
						<option value="<?php echo $this->_aVars['iKey']; ?>"<?php if (isset ( $this->_aVars['aOption']['value'] ) && isset ( $this->_aVars['aOption']['selected'] ) && $this->_aVars['aOption']['selected'] == true): ?> selected="selected"<?php endif; ?>><?php echo $this->_aVars['aOption']['value']; ?></option>
<?php endforeach; endif; ?>
				</select>
<?php elseif ($this->_aVars['aSetting']['var_type'] == 'radio'): ?>
<?php if (! $this->_aVars['aSetting']['is_required']): ?>
					<div class="custom_block_form_radio">
						<input id="radio_no_answer" type="radio" name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>]" value="0" checked="checked" />
						<label for="radio_no_answer"> <?php echo Phpfox::getPhrase('custom.no_answer'); ?> </label>
					</div> 
<?php endif; ?>
<?php if (count((array)$this->_aVars['aSetting']['options'])):  foreach ((array) $this->_aVars['aSetting']['options'] as $this->_aVars['iKey'] => $this->_aVars['aOption']): ?>
					<div class="custom_block_form_radio">
						<input id="radio_<?php echo $this->_aVars['aSetting']['field_id']; ?>_<?php echo $this->_aVars['iKey']; ?>" type="radio" name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>]" value="<?php echo $this->_aVars['iKey']; ?>" <?php if (isset ( $this->_aVars['aOption']['selected'] ) && $this->_aVars['aOption']['selected'] == true): ?>checked="checked"<?php endif; ?>>
						<label for="radio_<?php echo $this->_aVars['aSetting']['field_id']; ?>_<?php echo $this->_aVars['iKey']; ?>"> <?php echo $this->_aVars['aOption']['value']; ?> </label>
					</div> 
<?php endforeach; endif; ?>
<?php elseif ($this->_aVars['aSetting']['var_type'] == 'checkbox'): ?>
<?php if (count((array)$this->_aVars['aSetting']['options'])):  foreach ((array) $this->_aVars['aSetting']['options'] as $this->_aVars['iKey'] => $this->_aVars['aOption']): ?>
					<div class="custom_block_form_checkbox">
						<input id="checkbox_<?php echo $this->_aVars['aSetting']['field_id']; ?>_<?php echo $this->_aVars['iKey']; ?>" type="checkbox" name="custom[<?php echo $this->_aVars['aSetting']['field_id']; ?>][]" value="<?php echo $this->_aVars['iKey']; ?>" <?php if (isset ( $this->_aVars['aOption']['selected'] ) && $this->_aVars['aOption']['selected'] == true): ?>checked="checked"<?php endif; ?>>
						<label for="checkbox_<?php echo $this->_aVars['aSetting']['field_id']; ?>_<?php echo $this->_aVars['iKey']; ?>"><?php echo $this->_aVars['aOption']['value']; ?> </label>
					</div>
<?php endforeach; endif; ?>
<?php endif; ?>
		</div>
