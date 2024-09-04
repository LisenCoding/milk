package com.entity.view;

import com.entity.KouweiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 口味
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
@TableName("kouwei")
public class KouweiView  extends KouweiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public KouweiView(){
	}
 
 	public KouweiView(KouweiEntity kouweiEntity){
 	try {
			BeanUtils.copyProperties(this, kouweiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
