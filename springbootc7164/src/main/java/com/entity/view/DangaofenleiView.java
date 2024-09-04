package com.entity.view;

import com.entity.DangaofenleiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 牛奶分类
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
@TableName("dangaofenlei")
public class DangaofenleiView  extends DangaofenleiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DangaofenleiView(){
	}
 
 	public DangaofenleiView(DangaofenleiEntity dangaofenleiEntity){
 	try {
			BeanUtils.copyProperties(this, dangaofenleiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
